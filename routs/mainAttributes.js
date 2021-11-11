const express = require("express");
const router = express.Router();

const {
    addMainAttribute,
    getCamps,
    addSubAttribute,
    addSubAttributesCards,
    addCampImage,
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
router.post(
  "/addCampImage",
  addCampImage
);
module.exports = router;