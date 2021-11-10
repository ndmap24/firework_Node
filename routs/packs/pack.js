const express = require('express')
const Packs = require('../../models/Packs')
const BoughtPacks = require('../../models/BoughtPacks')
const route = express.Router()
const { check, validationResult } = require("express-validator")
const Cards = require('../../models/Cards')

route.get('/info', async (req, res) => {
    try {
        const data = await Packs.find()
        res.send(data)
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error')
    }


})

//bought packs

route.get('/count', async (req, res) => {
    try {
        const data = await BoughtPacks.find()
        res.send(data)
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error!!')
    }
})


//buypacks

route.put('/update', [
    check('number', 'number of packs is required').not().isEmpty(),
    check('packageType', 'package type is require').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { number, packageType } = req.body;

    try {

        switch(packageType){
            case "sparkTreasured":
                 await BoughtPacks.findOneAndUpdate({sparkTreasuerPacks : number})
                 return res.send('changed')
            case "sparkClassical":
                await BoughtPacks.findOneAndUpdate({sparkClassicPacks : number})
                 return res.send('changed')
            case "sparkCamp":
                await BoughtPacks.findOneAndUpdate({sparkCampPacks : number})
                return res.send('changed')
            default :
                res.status(400).send('no pack type found !!')
            

        }
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error!!')
    }
})

//get cards array



route.post('/cards',async(req,res)=>{
    try {
        const cards = req.body.cards;
        console.log(cards);
        let arr = await Cards.findOne()
        arr= (arr.cardsArr);
        if(cards==10){
            return res.json({arr})
        }
        else if (cards < 10){
            let i ;
            let b = []
            for (i=0; i!==cards; i++){
                b.unshift(arr[i])
            }
            return res.json({arr : b})
        }
        else if(cards > 10){
            let b = []
            let i;
            for (i=0; b.length !== cards; i++ ){
                b.unshift(...arr)
                if (b.length > cards){
                   break

                }
            }
            let c;
            let kk = []
            for (c=0; c<cards; c++){
                kk.unshift(b[c])
            }
            return res.json({arr : kk})
            
        }

        
    } catch (err) {
        console.error(err);
        res.status(500).send("server error !!")
    }
})


module.exports = route;
