var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var subAttributesCardsSchema = new Schema({
    attributesId:{
		type: Schema.Types.ObjectId,
		optional: true,
		ref: 'mainAttributes'
	},
    subAttributesId:{
		type: Schema.Types.ObjectId,
		optional: true,
		ref: 'subAttributes'
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

module.exports = mongoose.model("subAttributesCards", subAttributesCardsSchema);