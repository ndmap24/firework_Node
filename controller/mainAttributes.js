const mainAttributes = require("../models/mainAttributes");
const subAttributes = require("../models/subAttributes");
const subAttributesCards = require("../models/subAttributesCards");
var multer  = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("req.bodyreq.bodyreq.body1222222",req.body);
        cb(null, "../../firework_Image/campImages");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.png')
    }
});
const upload = multer({storage: storage}).single('campImage');


exports.addCampImage = async(req, res) =>{
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
            subAttributes.findOneAndUpdate({_id:id},{$set:{"image":originalname}},(err,setImage)=>{
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

exports.addMainAttribute = async(req, res) => {
    const data = (req.body);
    var name = data.name;
    
    if(name == "" || name == null){
        return res.json("Please Enter Attribute Name");
    }
    var dataSave = new mainAttributes(req.body);
    dataSave.save((err,attribute)=>{
        if(err){
            return res.status(400).json({
                error: "Message not add."
            });
        }
        else{
            res.json({
                "status": 1,
                "message": "Attribute Add Successfully.",
                "data":{
                    attribute
                },
            })
        }
    })
}
exports.addSubAttribute = async(req, res) => {
    const data = (req.body);
    var name = data.name;
    var attributesId = data.attributesId;
    
    if(name == "" || name == null){
        return res.json("Please Enter Sub Attributes Name");
    }
    if(attributesId == "" || attributesId == null){
        return res.json("Please Enter Attribute Id");
    }
    var dataSave = new subAttributes(req.body);
    dataSave.save((err,subAttributesSave)=>{
        if(err){
            return res.status(400).json({
                error: "Message not add."
            });
        }
        else{
            res.json({
                "status": 1,
                "message": "Sub Attribute Add Successfully.",
                subAttributesSave
            })
        }
    })
}
exports.addSubAttributesCards = async(req, res) => {
    const data = (req.body);
    var name = data.name;
    var attributesId = data.attributesId;
    var subAttributesId = data.subAttributesId;
    
    if(name == "" || name == null){
        return res.json("Please Enter Sub Attributes Name");
    }
    if(attributesId == "" || attributesId == null){
        return res.json("Please Enter Attribute Id");
    }
    if(subAttributesId == "" || subAttributesId == null){
        return res.json("Please Enter Sub Attribute Id");
    }
    var dataSave = new subAttributesCards(req.body);
    dataSave.save((err,subAttributesCards)=>{
        if(err){
            return res.status(400).json({
                error: "Message not add."
            });
        }
        else{
            res.json({
                "status": 1,
                "message": "Sub Attribute Card Add Successfully.",
                subAttributesCards
            })
        }
    })
}
exports.getCamps = async(req, res) => {
    var newArr =[];
    console.log("tetsing rw");
    subAttributes.find({ isDelete: false,attributesId:("6180e2c5eb0f9cdcacdef576")},).exec(async (err, getdata) => {
        if (err) {
            console.log("err", err);
            return res.json({
                status: false,
                message: "Something is wrong"
            });
        }
        else {
            if (getdata.length > 0) {
                for(let i = 0; i < getdata.length; i++){
                    newArr.push({
                        Id:getdata[i]._id,
                        attributesId:getdata[i].attributesId,
                        name:getdata[i].name,
                        image:getdata[i].image,
                    });   
                }
            }
           
            console.log("getdata", getdata);
            return res.json({
                status:1,
                data:newArr
            });
        }
    });
}