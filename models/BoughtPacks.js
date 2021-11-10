const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BoughtPacksSchema = new Schema({
    sparkTreasuerPacks : {
        type : Number,
        required : true,
    },
    sparkClassicPacks : {
        type : Number,
        required : true,
    },
    sparkCampPacks : {
        type : Number,
        required : true,
    }

})

module.exports= BoughtPacks = mongoose.model('BoughtPacks', BoughtPacksSchema)
