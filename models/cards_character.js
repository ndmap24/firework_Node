const mongoose = require("mongoose")
const schema = mongoose.Schema

const card_character = new schema({
    card_id:{
        // type: Number,
        type:mongoose.Schema.Types.ObjectId, ref: 'copper_material_cards',
        required:true
    },
    name:{
        type: String,
        required:true
    }
}, { strict: false });
var detail = mongoose.model("card_character", card_character)
module.exports = detail

