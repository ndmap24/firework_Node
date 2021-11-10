const connectDb = require('../config/db');
const Packs = require('../models/Packs');
const BoughtPacks = require('../models/BoughtPacks')
const Cards = require('../models/Cards')
connectDb()
const db = async () => {
    const sparkTreasurePacks = new Packs({
        pack: "sparkTreasured",
        packs: {
            card1: {
                value: 168,
                info: "*Spark Collection Card Pack is limited to two purchases per address!",
                offer: "1 package"
            }
        }
    });

    const sparkClassicalPacks = new Packs({
        pack: "sparkClassical",
        packs: {
            card1: {
                value: 10,
                info: "",
                offer: "1 pack"

            },
            card2: {
                value: 20,
                info: "",
                offer: "2 packs"
            }, card6: {
                value: 60,
                info: "",
                offer: "6 packs"
            }, card11: {
                value: 100,
                info: "Exclusive Package",
                offer: "10 get 1 free"
            }, card22: {
                value: 200,
                info: "Supreme Package",
                offer: "20 get 2 free"
            }
        }
    });


    const sparkCampPacks = new Packs({
        pack: "sparkCamp",
        packs: {
            card1: {
                value: 35,
                info: "",
                offer: "1 pack"

            },
            card2: {
                value: 70,
                info: "",
                offer: "2 packs"
            }, card6: {
                value: 210,
                info: "",
                offer: "6 packs"
            }, card11: {
                value: 350,
                info: "Exclusive Package",
                offer: "10 get 1 free"
            }
        }
    });

    const boughtPacks = new BoughtPacks({
        sparkTreasuerPacks : 0,
        sparkClassicPacks : 0 ,
        sparkCampPacks : 0
    })

    const cards = new Cards({
        cardsArr : ['char1.png', 'char2.png', 'char3.png', 'char4.png', 'char5.png', 'char6.png', 'char7.png', 'char8.png', 'char9.png', 'char11.png']

    })

    await sparkTreasurePacks.save()
    await sparkClassicalPacks.save()
    await sparkCampPacks.save()
    await boughtPacks.save()
    await cards.save()
}

db()


