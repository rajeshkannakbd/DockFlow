import mongoose from "mongoose";

const notificationSchema=new mongoose.Schema({

client:{
type:mongoose.Schema.Types.ObjectId,
ref:"Client"
},

title:String,

message:String,

read:{
type:Boolean,
default:false
}

},{
timestamps:true
});

export default mongoose.model(
"Notification",
notificationSchema
);