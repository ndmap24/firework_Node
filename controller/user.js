const getAdminData = require("../models/admin");
// const getCategory = require("../models/category");
var jwt = require("jsonwebtoken");
var bcrypt = require('bcrypt');
const User = require('../models/user');



exports.signup = async (req,res)=>{
    // try{
        var email = req.body.email;

        User.findOne({email:email},(err,userdata)=>{
            if(err){
                console.log("err",err);
                res.json({
                    status:false,
                    message:"Something is wrong"
                });
            }
            else{
                if(userdata == null){
                    console.log("1")
                    const newUser = new User({
                        email: email,
                    });
                    console.log("newUser",newUser);
                    newUser.save((err,saveData)=>{
                        if(err){
                           res.json({
                                status:false,
                                message:"Something is wrong. User not register"
                            }); 
                        }
                        else{
                            res.json({
                                statusCode:"200",
                                statusMsj:"Successfuly Register",
                                data:saveData
                            });
                        }
                        
                    });
                    // newUser.save().then((result)=>{
                    //     console.log("result",result);
                    //     res.json({statusCode:"200",statusMsj:"Successfuly Register", data:result})
                    // }).catch((err)=>{
                    //     console.log("err",err);
                    //     return res.json(err);
                    // })
                }
                else{
                    return res.json({
                        status: true,
                        message:"User Already Exist"
                    });
                }
            }
        });

        // const newUser = new User({
        //     email: email,
        // });
        // console.log("newUser",newUser);
        // newUser.save()
        // .then((result)=>{
        //     res.json({statusCode:"200",statusMsj:"Successfuly Register", data:result})
        // }).catch((err)=>{
        //     console.log(err);
        //     return res.send(err);
        // })
    // }catch(err){
    //     console.log(err)
    //     return res.send(err)
    // }
}

// exports.register = (req, res) =>{
//     const adminCollection = new getAdminData();
//     const slat = 10
//     var data = req.body;
//     var username =  data.username;
//     var password = data.password;
//     console.log(data.username);

//     bcrypt.hash(password,slat,(err,pass)=>{
//         if(err){
//             console.log("errorr",err);
//             return res.json(err);
//         }
//         else{
//             console.log("password",pass);
//             password = pass;
//             adminCollection.userName = username;
//             adminCollection.password = password;
//             adminCollection.save((err,saveData)=>{
//                 if(err){
//                     console.log("errrr",err);
//                     res.render('login',{title:"login sucess"});   
//                 }
//                 else{
//                     console.log("saveData",saveData);
//                     res.render('index',{title:"login sucess"});   
//                 }
//             });
            
//         }
//     });
// }
