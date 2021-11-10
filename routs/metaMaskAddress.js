const express = require('express')
const route = express.Router()
// const metaMaskAddress = require('../controller/metaMaskAddress');
console.log("Meta");
const{
    metaMaskAddress, 
    login,
} = require('../controller/metaMaskAddress');

route.post(
    '/address',
    metaMaskAddress
);
route.post(
    '/login',
    login
);
module.exports = route