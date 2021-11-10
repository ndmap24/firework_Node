const mainAttributes = require("../models/mainAttributes");
const subAttributes = require("../models/subAttributes");
const subAttributesCards = require("../models/subAttributesCards");
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
                        Name:getdata[i].name,
                    })   
                }
            }
           
            console.log("getdata", getdata);
            return res.json({
                newArr
            });
        }
    });
}