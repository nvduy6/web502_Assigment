import axios from 'axios';
import React from 'react';
import {SubmitHandler,useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
type Props ={
 onAddPost:(posts:InputsType)=>void;
}
type InputsType = {
  title:string,
  desc:string
  image:string
}
const Add_post = (props:Props) => {
  const {register,handleSubmit,formState:{errors}}=useForm<InputsType>();
  const navigate = useNavigate();
const onSubmit:SubmitHandler<InputsType>=async data=>{
  const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duynv/image/upload";
    const CLOUDINARY_PRESET = "okwdgnez";
    const file = data.image[0];
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", CLOUDINARY_PRESET);
    const response = await axios.post(CLOUDINARY_API, formdata, {
      headers: {
        "Content-Type": "application/form-data"
      },
    });
    data.image = response.data.url;
props.onAddPost(data);
navigate("/admin/post")
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" className="form-control" {...register('title')} />
    </div>
    <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input type="file" className="form-control" {...register('image')} />
        </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
     <textarea cols={30} rows={10} defaultValue={""} {...register('desc')} />

    </div>
    
    
    <button type="submit" className="btn btn-primary">Add</button>
  </form >
  )
}

export default Add_post