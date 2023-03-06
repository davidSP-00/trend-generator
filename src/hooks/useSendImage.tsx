import { useState } from "react";


export const useSendImage=()=>{

    const [image, setImage] = useState<any>(null);
    const [url, setUrl] = useState("");
const fetchBody:any=()=>{
    const data=new FormData()
    data.append("file",image!);
    data.append("upload_preset","w9totypn");
    data.append("cloud_name","dckpbahu0");
    return {
        method:"POST",
        body:data
      };
  }

    const Input=()=>(<>
    {<label>{!image?"Subir imagen":"Cambiar: "+image.name}<input
        type="file"
        name="myImage"
        accept="image/png, image/jpeg,image/jpg" 
        onChange={(event:any) => {
          setImage(event.target.files[0])
        }}
      /></label>}
     </>)
    return {Input:Input,/* send:uploadImage, */fetchBody:fetchBody(),image:image}
}