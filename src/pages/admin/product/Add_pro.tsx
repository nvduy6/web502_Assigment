import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
type ProductAddProps={
  name:string,
  onAdd:(product:TypeInputs)=>void;
}
type TypeInputs = {
  name:string,
  price:number
}
const Add_pro = (props:ProductAddProps) => {
  const {register,handleSubmit,formState:{errors}}= useForm<TypeInputs>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<TypeInputs>=data=>{
  props.onAdd(data);
  navigate("/admin/products")
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register('name')} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" {...register('price')} />
  </div>
 
  <button type="submit" className="btn btn-primary">Add</button>
</form>

  )
}

export default Add_pro