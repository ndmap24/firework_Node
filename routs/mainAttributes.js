const express = require("express");
const router = express.Router();

const {
    addMainAttribute,
    getCamps,
    addSubAttribute,
    addSubAttributesCards,
} = require("../controller/mainAttributes");

router.post(
  "/addMainAttribute",
  addMainAttribute
);
router.get(
  "/getCamps",
  getCamps
);
router.post(
  "/addSubAttribute",
  addSubAttribute
);
router.post(
  "/addSubAttributesCards",
  addSubAttributesCards
);
module.exports = router;