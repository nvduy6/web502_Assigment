import React from 'react';
import {SubmitHandler,useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
type Props ={
 onAddPost:(posts:InputsType)=>void;
}
type InputsType = {
  title:string,
  desc:string
}
const Add_post = (props:Props) => {
  const {register,handleSubmit,formState:{errors}}=useForm<InputsType>();
  const navigate = useNavigate();
const onSubmit:SubmitHandler<InputsType>=data=>{
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
      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
     <textarea cols={30} rows={10} defaultValue={""} {...register('desc')} />

    </div>
    
    
    <button type="submit" className="btn btn-primary">Add</button>
  </form >
  )
}

export default Add_post