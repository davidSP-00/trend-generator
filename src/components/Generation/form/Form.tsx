import React, { useEffect, useState } from 'react';
import { CloudinaryImage } from '@cloudinary/url-gen/assets/CloudinaryImage';
import { fill} from '@cloudinary/url-gen/actions/resize';
import {AdvancedVideo} from '@cloudinary/react';
import { sendVideo } from '../../../cloudinary/video';
import { useSendImage } from '../../../hooks/useSendImage';
import './Form.scss'
import { b64toBlob } from '../../../utils/b64toBlob';
import { API_CLOUDINARY_UPLOAD, API_TTS } from '../../../utils/Constantes';

function Form() {

  const {Input:Input1,fetchBody:fetchBody1,image:image1}=useSendImage();
  const {Input:Input2,fetchBody:fetchBody2,image:image2}=useSendImage();
  const {Input:Input3,fetchBody:fetchBody3,image:image3}=useSendImage();
  const {Input:Input4,fetchBody:fetchBody4,image:image4}=useSendImage();
  const {Input:Input5,fetchBody:fetchBody5,image:image5}=useSendImage();


  const myImage = new CloudinaryImage('sample', { cloudName: 'dckpbahu0' }).resize(fill().width(100).height(150));
  
  const [cloudVideo, setCloudVideo] = useState<any>(null);
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [textos, setTextos] = useState({
    text1:"",
    text2:""
  });
  const formSuccess=
  image1===null||
  image2===null||
  image3===null||
  image4===null||
  image5===null||
  textos.text1===""||
  textos.text2==="";
  return (
    <div className='form'>
      <h4>Describa su producto: <span>(70. max)</span></h4>
      <input type="text"  value={textos.text1} onChange={(value)=>{
        setTextos((ant:any)=>{
          return {...ant,...{text1:value.target.value}}
        })
      }} 
      maxLength={70} />
      <h4>La mejor característica de su producto:  <span>(70. max)</span></h4>
      <input type="text"  value={textos.text2} onChange={(value)=>{
        setTextos((ant:any)=>{
          return {...ant,...{text2:value.target.value}}
        })
      }}
      maxLength={70}  />
      <h4>Ahora, subiremos unas cuantas imagenes de su producto:</h4>
      <h5>Imagen de su logo:</h5>
    <Input1></Input1>
      <h5>Imagenes de su producto:</h5>
    <Input2></Input2>
    <Input3></Input3>
    <Input4></Input4>
    <Input5></Input5>
    <button className='send' disabled={buttonDisabled||formSuccess} onClick={()=>{
      if(formSuccess){
          return;
      }
      setButtonDisabled(true);
      setCloudVideo(null);
      Promise.all([
        fetch(API_TTS,{
            method:"POST",
            body:JSON.stringify({
              text:textos.text1,
              voice:"es_002"
            })
        }).then(resp=>resp.json()),
        fetch(API_TTS,{
            method:"POST",
            body:JSON.stringify({
              text:textos.text2,
              voice:"es_002"
            })
        }).then(resp=>resp.json())
      ]).then(data=>{
        const formData=new FormData()
        const blob = b64toBlob(data[0].data, "audio/mp3");
        formData.append("file",blob);
        formData.append("upload_preset","w9totypn");
        formData.append("cloud_name","dckpbahu0");

        const formData2=new FormData()
        const blob2 = b64toBlob(data[1].data, "audio/mp3");
        formData2.append("file",blob2);
        formData2.append("upload_preset","w9totypn");
        formData2.append("cloud_name","dckpbahu0");
        Promise.all([
          fetch(API_CLOUDINARY_UPLOAD,{method:'POST',body:formData}).then(resp => resp.json()),
          fetch(API_CLOUDINARY_UPLOAD,{method:'POST',body:formData2}).then(resp => resp.json())
        ]).then(videos_id=>{
          Promise.all([
            fetch(API_CLOUDINARY_UPLOAD,fetchBody1).then(resp => resp.json()),
            fetch(API_CLOUDINARY_UPLOAD,fetchBody2).then(resp => resp.json()),
            fetch(API_CLOUDINARY_UPLOAD,fetchBody3).then(resp => resp.json()),
            fetch(API_CLOUDINARY_UPLOAD,fetchBody4).then(resp => resp.json()),
            fetch(API_CLOUDINARY_UPLOAD,fetchBody5).then(resp => resp.json())
          ]).then((data)=>{
            setCloudVideo(sendVideo(data[0].public_id,data[1].public_id,data[2].public_id,data[3].public_id,data[4].public_id,textos.text1,textos.text2,videos_id[0].public_id,videos_id[1].public_id))
            setButtonDisabled(false);
          })
        });
      });
    }}>Generar video viral</button>
    { cloudVideo&&<div><AdvancedVideo  cldVid={cloudVideo} style={{ height: 500 ,width:"100%",maxWidth:280}} controls /></div>}
     
    </div>
  );
}

export default Form;
