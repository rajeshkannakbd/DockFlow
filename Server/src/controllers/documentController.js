import Document from "../models/Documents.js";

export const uploadDocument=async(req,res)=>{

try{

const{

client,

documentType,

documentName,

status

}=req.body;

const document=await Document.create({

client,

documentType,

documentName,

status,

fileUrl:req.file.path,

cloudinaryId:req.file.filename,

uploadedBy:req.user.id

});

res.status(201).json({

success:true,

document

});

}catch(err){

res.status(500).json({

success:false,

message:err.message

});

}

};