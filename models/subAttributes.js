var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var subAttributesSchema = new Schema({
    attributesId:{
		type: Schema.Types.ObjectId,
		optional: true,
		ref: 'mainAttributes'
	},
    name:{
        type:String,
		optional:false,
        trim: true
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

module.exports = mongoose.model("subAttributes", subAttributesSchema);