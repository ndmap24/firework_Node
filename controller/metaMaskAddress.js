const metaMaskAddress = require('../models/metaMaskAddress');
var jwt = require("jsonwebtoken");

exports.login = async (req,res)=>{
    console.log("jddjjdjdj");
    var email = req.body.email;
    metaMaskAddress.findOne({email:email},(err,dataget)=>{
        if(err){
            console.log("err",err);
            res.json({
                status:false,
                message:"Something is wrong"
            });
        }
        else{
            console.log("dataget",dataget);
            if(dataget == null){
                console.log("1")
                const newUser = new metaMaskAddress({
                    email:email
                });
                newUser.save((err,saveData)=>{
                    if(err){
                        console.log("erer",err);
                        return res.json({
                            status:false,
                            message:"Something is wrong. metaMaskAddress not Add"
                        }); 
                    }
                    else{
                        const token = jwt.sign({ data: saveData }, process.env.SECRET);
                        console.log("token",token);
                        res.json({
                            "status":1,
                            "message":"Successfuly login",
                            "data":saveData,
                            "token":token
                        });
                    }
                });
            }
            else{
                const token = jwt.sign({ data: dataget }, process.env.SECRET);
                console.log("token",token);
                res.json({
                    "status":1,
                    "message":"Successfuly login",
                    "data":dataget,
                    "token":token
                });
            }
        }
    });
}
exports.metaMaskAddress = async (req,res)=>{
    console.log("222");
    var address = req.body.metaMaskAddress;
    var accessToken = req.headers.authorization;
    var userId;
    console.log("accessToken",accessToken);
    var token = accessToken && accessToken.split(' ')[1];
    if (token == null) 
        return res.sendStatus(401)
    else{
        console.log("token",token)
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus({status:false,message:"login user Id not found"})
            else{
                console.log("userId",user);
                console.log("userId",user.data._id);
                userId = user.data._id;
            }
        });
    }
    metaMaskAddress.findOneAndUpdate({_id:userId},{$set:{metaMaskAddress:address}},(err,getAddress)=>{
        if(err){
            console.log("err",err);
            res.json({
                status:false,
                message:"Something is wrong"
            });
        }
        else{
            res.json({
                "status":1,
                "message":"Successfuly Added MetaMask Address",
            });
        }
    });
}