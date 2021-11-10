const  Card_character =  require('../models/cards_character');
const Character_value = require('../models/character_value');
const Copper_material_cards = require('../models/copper_material_cards');
const Rank = require('../models/rank');

exports.card_character = async (req, res)=>{
    try{
        var card_id = req.body.card_id;
        var name = req.body.name;
        const newCard = new Card_character({
            card_id:card_id,
            name:name
        })
        let response = new Card_character(newCard)
        response.save()
        .then((result)=>{
            res.json({statusCode:"200",statusMsj:"Successfuly Card Added", data:result})
        }).catch((err)=>{
            console.log(err);
            return res.send(err);
        })

    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

exports.character_value = async (req, res)=>{
    try{
        const{
            card_mat_id,card_char_id,rank_id,value
        }=req.body
        const newCharacterValue = new Character_value({
            card_mat_id : card_mat_id,
            card_char_id : card_char_id,
            rank_id : rank_id,
            value : value

        })
        let response = new Character_value(newCharacterValue)
        response.save()
        .then((result)=>{
            res.json({statusCode:"200",statusMsj:"Character Value Added", data:result})
        }).catch((err)=>{
            console.log(err);
            return res.send(err);
        })

    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

exports.copper_material_cards = async (req, res)=>{
    try{
        const{
            name
        }=req.body
        const newCoperMaterialCards = new Copper_material_cards({
            name : name

        })
        let response = new Copper_material_cards(newCoperMaterialCards)
        response.save()
        .then((result)=>{
            res.json({statusCode:"200",statusMsj:"Coper Material Cards Added", data:result})
        }).catch((err)=>{
            console.log(err);
            return res.send(err);
        })

    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

exports.rank = async (req, res)=>{
    try{
        const{name} = req.body
        const newRank = new Rank({
            name : name

        })
        let response = new Rank(newRank)
        response.save()
        .then((result)=>{
            res.json({statusCode:"200",statusMsj:"Rank Added", data:result})
        }).catch((err)=>{
            console.log(err);
            return res.send(err);
        })

    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

exports.character_value_view = async (req, res)=>{
    console.log("khfda");
    // const user_id = req.query.user_id
    // Character_value.find({_id:user_id}).then(result=>{
    Character_value.character_value_view()
    // .populate({ path: 'card_mat_id', select: 'name' })
    // .populate({ path: 'card_char_id', select: 'name' })
    // .populate({ path: 'rank_id', select: 'name' })
    .then(result=>{
        return res.json({statusCode:200, data:result})
    }).catch(err=>{
       return res.send(err)
    })
}