const getStarShip = require("../models/starShip");
var multer  = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("req.bodyreq.bodyreq.body1222222",req.body);
        cb(null, "../../firework_Image/starShipImages");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.png')
    }
});
const upload = multer({storage: storage}).single('starShipImage');

exports.addStarShip = async(req, res) =>{
    const data = new getStarShip(req.body);
    console.log("data",data);  
    data.save((err,saveData)=>{
        if(err){
            res.json({
                status: false,
                message:"Something is wrong"
            });
        }
        else{
            res.json({
                status: 1,
                data:saveData
            });
        }
    });
}


exports.updateStarShipImage = async(req, res) =>{
    upload(req,res,err => {
        var originalname ='';
        console.log("req.bodyreq.bodyreq.body",req.body);
        console.log("req.bodyreq.bodyreq.file",req.file);
        console.log("req.bodyreq.bodyreq.err",req.err);

        var id = req.body.id;
        if(err){
            return res.json(err);
        }
        else{
            var files = req.file;
            originalname = files.filename;
            getStarShip.findOneAndUpdate({_id:id},{$set:{"image":originalname}},(err,setImage)=>{
                if(err){
                    return res.json(err);
                }
                else{
                    res.json({
                        status:1,
                        data:setImage
                    })
                }
            })
        }
    });
}


exports.getAllStarShip = async(req, res) =>{  
    getStarShip.find((err,getData)=>{
        if(err){
            res.json({
                status: false,
                message:"Something is wrong"
            });
        }
        else{
            res.json({
                status: 1,
                data:getData
            });
        }
    });
}

exports.getOneStarShip = async(req, res) =>{  
    const id = req.body.id;
    getStarShip.findById(id,(err,starship)=>{
        if(err){
            res.json({
                status:false,
                message:"Somethis is Wrong"
            });
        }
        else{
            res.json({
                status:1,
                data:starship
            })
        }
    });
}