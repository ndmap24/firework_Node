const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const metaMaskAddressSchema = new Schema({

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: false,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    metaMaskAddress: {
        type: String,
		optional:true
    },    
    isDelete:{
        type: Boolean,
        default: false,
        required: false
    }
})

module.exports = metaMaskAddress = mongoose.model('metaMaskAddress', metaMaskAddressSchema)
