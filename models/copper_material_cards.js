const mongoose = require("mongoose")
const schema = mongoose.Schema

const copper_material_cards = new schema({
    name:{
        type: String,
        required: true
    }
}, { strict: false });
var detail = mongoose.model("copper_material_cards", copper_material_cards)
module.exports = detail

