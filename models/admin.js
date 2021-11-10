const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    otp: {
      type: Number,
      default:0
    },
    status: {
      type: Number,
      default:1
    },
    isDelete:{
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);


//# DATABASE = mongodb+srv://nadeem_beg:%23JsDepart@cluster0.49igw.mongodb.net/avisori-backend?retryWrites=true&w=majority