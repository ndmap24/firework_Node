const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PacksSchema = new Schema({

    pack: {
        type: String,
        required: true
    },
    packs: {
        type : Object
    }

})

module.exports = Packs = mongoose.model('Packs', PacksSchema)
