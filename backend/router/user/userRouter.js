let express = require('express');
let router = express.Router();
let UserOperation = require('../../operation/user/userOperation');

/**
 * 
 * This is the rest API for saving the new user
 * 
 */
router.post('/saveNewUser', function(req, res, next){
    let userDetails = {
        user_id : req.body.userId,
        user_name : req.body.userName,
        user_password : req.body.userPassword,
        first_name : req.body.firstName,
        last_name : req.body.lastName,
        adress : req.body.adress,
        contact_number : req.body.contact,
        isTrue : true,
    }
    UserOperation.saveNewUser(userDetails).then(function(savedUser){
        if(savedUser){
            res.send({
                success : true,
                MSG : "Successfully saved the user",
                savedUser : savedUser
            });
        }
    }).catch(function(err){
        if(err){
            console.log('Error occur : '+err);
        }
    })
});

/**
 * 
 * This is the rest API for getting user
 * 
 */
router.get('/getUserList', function(req, res){
    UserOperation.getAllUser().then(function(allUser){
        res.send({
            success : true,
            MSG : "Successfully get the user details",
            getAllUser : allUser
        })
    }).catch(function(err){
        console.log("Error in getting the user List");
    });
});

/**
 * 
 * This is the rest API for getting selected user
 * 
 */
router.get('/getSelectedUser', function(req, res){

});

/**
 * 
 * This is the rest API for updating the user
 * 
 */
router.get('/updateUser', function(req, res){

});

/**
 * 
 * This is the rest API for deleting the user
 * 
 */
router.get('/deleteUser', function(req, res){

});

module.exports = router;