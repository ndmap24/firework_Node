const express = require('express');
const bodyParser = require("body-parser");

const route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());

const {card_character,character_value, copper_material_cards, rank, character_value_view
} = require('../../controller/card_character');
route.post('/card_character',card_character);
route.post('/character_value',character_value);
route.post('/copper_material_cards', copper_material_cards);
route.post('/rank', rank);
route.get('/character_value_view', character_value_view)


module.exports = route