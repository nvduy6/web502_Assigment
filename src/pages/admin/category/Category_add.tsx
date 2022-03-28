import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
type CategoryAddProps={
    name:string
    onAdd:(category:TypeInputs)=>void;
}
type TypeInputs={
    name:string,
}
const Category_add = (props:CategoryAddProps) => {
const {register,handleSubmit,formState:{errors}} = useForm<TypeInputs>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<TypeInputs>=data=>{
    props.onAdd(data);
    navigate("");
}
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ten danh muc</label>
    <input type="text" className="form-control" placeholder='Nhap ten danh muc' {...register('name')} />
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
        </form>
    </div>
  )
}

export default Category_add