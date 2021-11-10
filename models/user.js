const mongoose = require("mongoose")
const schema = mongoose.Schema

const Users = new schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
}, { strict: false });
var detail = mongoose.model("users", Users)
module.exports = detail

