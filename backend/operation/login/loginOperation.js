let LoginModel = require('../../model/register/registerModel');
const bcrypt = require('bcrypt');
let Promise = require('promise');

let loginUser = (userdetails) =>{
    return new Promise((resolve, reject)=>{
        console.log(userdetails.email)
        LoginModel.findOne({user_name: userdetails.email}, (err,user)=>{
            if(err){
                resolve({
                    MSG:err,
                    status:false
                })
            }else{
                if(!user){
                    resolve({
                        MSG:'Invalid Email',
                        status:false
                    })
                }else{
                    bcrypt.compare(userdetails.password, user.user_password, function(err, result) {
                      if(err){
                        resolve({
                                  MSG : err,
                                  status : false
                              })
                      }else{
                        if(result == true){
                              resolve({
                                status:true,
                                user:user
                            })
                        }else{
                          resolve({
                            MSG : 'Error in login',
                            status:false,
                          })
                        }
                      }
                    });
                }
            }
        })
    })
}



module.exports = {
    loginUser : loginUser
}
