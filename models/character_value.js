const mongoose = require("mongoose")
const schema = mongoose.Schema

const character_value = new schema({
    card_mat_id:{
        // type: Number,
        type: mongoose.Schema.Types.ObjectId, ref: 'copper_material_cards',
        required: true
    },
    card_char_id:{
        // type: Number,
        type: mongoose.Schema.Types.ObjectId, ref: 'cards_character',
        required: true
    },
    rank_id:{
        // type:Number,
        type: mongoose.Schema.Types.ObjectId, ref: 'rank',
        required: true
    },
    value:{
        type:Number,
        required: true
    }
}, { strict: false });

// character_value.static("character_value_view",function(){
//     this.find()
//     .populate({ path: 'card_mat_id', select: 'name' })
//     .populate({ path: 'card_char_id', select: 'name' })
//     .populate({ path: 'rank_id', select: 'name' })
//     .then(result=>{
//         return res.json({statusCode:200, data:result})
//     }).catch(err=>{
// })
var detail = mongoose.model("character_value", character_value)
module.exports = detail

