const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CardsSchema = new Schema({
    
    cardsArr : {
        type : Array,
        requireq : true
    }
    
})
module.exports= Cards = mongoose.model('Cards', CardsSchema)
