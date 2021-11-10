const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const app = express()
const path = require('path')
var bodyParser = require("body-parser");
require("dotenv").config();



connectDb()

//middilewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/getpacks', require('./routs/packs/pack'))
app.use('/getpacks',require('./routs/packs/pack'))
app.use('/packs',require('./routs/packs/pack'))
app.use('/get',require('./routs/packs/pack'))

// ----------- USer -----------
app.use('/user', require('./routs/packs/user'))

// ------- card Character -----
app.use('/card_character', require('./routs/packs/card_character'))
//------- add address ------
const addressAdd = require('./routs/metaMaskAddress');
const addMainAttribute = require('./routs/mainAttributes');
app.use('/api',addressAdd);
app.use('/api',addMainAttribute);


// if(process.env.NODE_ENV === 'production'){
//   // Set static folder
//   app.use(express.static('frontend/build'));

//   app.get("*",(req,res)=>{
//       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   });
// }




const port = process.env.PORT || 8000;

//Starting a server
app.listen(process.env.PORT || 8000, () => {
  console.log(`app is running at`,port);
});
