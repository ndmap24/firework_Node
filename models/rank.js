const mongoose = require("mongoose")
const schema = mongoose.Schema

const rank = new schema({
    name:{
        type: String,
        required: true
    },
}, { strict: false });
var detail = mongoose.model("rank", rank)
module.exports = detail

