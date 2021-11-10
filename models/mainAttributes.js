const mongoose = require("mongoose");

const mainAttributesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
        type: String,
        trim: true,
        default:"Attribute",
        required: false,
    },
    status: {
      type: Number,
      default:1
    },
    isDelete:{
        type:Boolean,
        default:false
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("mainAttributes", mainAttributesSchema);