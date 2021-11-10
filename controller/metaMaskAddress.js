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
    console.log("jddjjdjdj");
    var address = req.body.metaMaskAddress;
    metaMaskAddress.findOne({metaMaskAddress:address},(err,getAddress)=>{
        if(err){
            console.log("err",err);
            res.json({
                status:false,
                message:"Something is wrong"
            });
        }
        else{
            if(getAddress == null){
                console.log("1")
                const newUser = new metaMaskAddress({
                    metaMaskAddress: address,
                });
                console.log("newUser",newUser);
                newUser.save((err,saveData)=>{
                    if(err){
                        res.json({
                            status:false,
                            message:"Something is wrong. metaMaskAddress not Add"
                        }); 
                    }
                    else{
                        return res.json({
                            statusCode:"200",
                            statusMsj:"Successfuly Address Add",
                            data:saveData
                        });
                    }
                    
                });
            }
            else{
                return res.json({
                    status: true,
                    message:"Address Already Exist"
                });
            }
        }
    });
}