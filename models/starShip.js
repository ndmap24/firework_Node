var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var starShipSchema = new Schema({
    name:{
        type:String,
		optional:false,
        trim: true
    },
    initiatePower:{
        type:Number,
        required:true,
    },
    MaxSlotsNumber:{
        type:Array,
        required:true
    },
    initiateOpenSlotNumber:{
        type:Array,
        required:true
    },
	image: {
		type: String,
		trim: true,
        required:false
	},
    status:{
        type: Number,
        default:1
    },
	isDefault:{
		type: Boolean,
		default:false
	},
	isDelete:{
		type: Boolean,
		default:false
	}
},{ timestamps: true })

module.exports = mongoose.model("starShip", starShipSchema);