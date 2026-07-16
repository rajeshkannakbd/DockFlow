import mongoose from "mongoose";

const schema=new mongoose.Schema({

client:{

type:mongoose.Schema.Types.ObjectId,

ref:"Client",

required:true

},

documentType:String,

documentName:String,

cloudinaryId:String,

fileUrl:String,

uploadedBy:{

type:mongoose.Schema.Types.ObjectId,

ref:"Staff"

},

status:{

type:String,

default:"Pending"

}

},{
timestamps:true
});

export default mongoose.model(
"Document",
schema
);