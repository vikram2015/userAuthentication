let express = require('express');
let jwt = require('jsonwebtoken');
let router = express.Router();
let multer = require('multer');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
let config = require('../../../config/config');
var mailgun = require('mailgun-js')({apiKey: config.mailSettings.api_key, domain: config.mailSettings.domain});
//storage Engine
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        console.log('========req.file in filename======= '+req.file)
        cb(null, Date.now()+'.'+file.originalname);
    }
});

//init the upload variable
let uploading = multer({
    storage:storage
}).single('myImg');


let RegisterOperation = require('../../operation/register/registerOperation');

router.post('/registerUser',function(req, res, next){
    // console.log('============ file ======== '+JSON.stringify(req.file));
    // console.log('============ file ======== '+JSON.stringify(req.body.file));
    console.log('============ body ======== '+JSON.stringify(req.body));
    // console.log('============ body ======== '+req.body.filename);
    // uploading(req,res,function(err){
    //     if(err){
    //         return res.status(501).json({error:err});
    //     }
    //     //do all database record saving activity
    //     console.log('========req.file inside upload function======= '+JSON.stringify(req.file))
    //     return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    // });
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if(err){
        console.log('========== err ========= ' + err);
      }else{
        console.log('---------- hash ------- ' + salt);
      }
      bcrypt.hash(req.body.password, salt, function(err, hashedPassword) {
          // Store hash in your password DB.
          if(err){
            console.log('========== err ========= ' + err);
          }else{
            console.log('---------- hash ------- ' + hashedPassword);
            let  newUser = {
              user_name : req.body.email,
              user_password : hashedPassword
          }
          RegisterOperation.regiterUser(newUser).then(function(userDetails){
              mailgun.messages().send(config.mailOptions, (sendError, body) => {
                  if (sendError) {
                      console.log(sendError);
                      return;
                  }else{
                  console.log("Mail send"+JSON.stringify( body));
              }
              });
              let payload = { subject : userDetails._id };
              let token = jwt.sign(payload, 'mySecretKey');
              res.status(200).send({
                  success: true,
                  token
              })
          })
          }
      });
    });
})

module.exports = router;
