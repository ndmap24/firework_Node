const express = require('express')
const route = express.Router()
console.log("Meta");
const{
    addStarShip,
    updateStarShipImage,
    getAllStarShip,
} = require('../controller/starShip');

route.post(
    '/addStarShip',
    addStarShip
);
route.post(
    '/updateStarShipImage',
    updateStarShipImage
);
route.get(
    '/getAllStarShip',
    getAllStarShip
);

module.exports = route