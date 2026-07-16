import mongoose from "mongoose";

const registrationSchema=new mongoose.Schema({

client:{
type:mongoose.Schema.Types.ObjectId,
ref:"Client"
},

surveyNumber:String,

village:String,

taluk:String,

district:String,

documentNo:String,

documentYear:String,

registrationDate:Date,

status:{
type:String,
default:"Pending"
}

},{
timestamps:true
});

export default mongoose.model(
"Registration",
registrationSchema
);