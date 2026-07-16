import { useState } from "react";
import API from "../../api/axios";

function Documents(){

const[clientId,setClientId]=useState("");

const[documentType,setDocumentType]=useState("");

const[documentName,setDocumentName]=useState("");

const[file,setFile]=useState(null);

const upload=async()=>{

const form=new FormData();

form.append("client",clientId);

form.append("documentType",documentType);

form.append("documentName",documentName);

form.append("file",file);

try{

await API.post(

"/document/upload",

form,

{

headers:{

Authorization:`Bearer ${localStorage.getItem("token")}`

}

}

);

alert("Uploaded Successfully");

}catch(err){

alert(err.response.data.message);

}

};

return(

<div>

<h1>Upload Document</h1>

<input

placeholder="Client ID"

onChange={(e)=>setClientId(e.target.value)}

/>

<input

placeholder="Document Name"

onChange={(e)=>setDocumentName(e.target.value)}

/>

<select

onChange={(e)=>setDocumentType(e.target.value)}

>

<option>Sale Deed</option>

<option>Parent Document</option>

<option>Patta</option>

<option>EC</option>

<option>Chitta</option>

<option>Adangal</option>

<option>Other</option>

</select>

<input

type="file"

onChange={(e)=>setFile(e.target.files[0])}

/>

<button

onClick={upload}

>

Upload

</button>

</div>

);

}

export default Documents;