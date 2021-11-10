const express = require('express');
const bodyParser = require("body-parser");

const route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());

const {signup} = require('../../controller/user');
route.post("/signup",signup );


module.exports = route