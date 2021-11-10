const mongoose = require('mongoose')
const db = 'mongodb+srv://roshan:user12@cluster0.uoxgo.mongodb.net/firework?retryWrites=true&w=majority'
 const connectDb = async () =>{
    try {
        await mongoose.connect(db)
        console.log('connected to mongo');
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

module.exports = connectDb;