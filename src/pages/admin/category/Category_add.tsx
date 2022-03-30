import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
type CategoryAddProps={
    name:string
    onAdd:(categorys:TypeInputs)=>void;
}
type TypeInputs={
    name:string,
    price:number
}
const Category_add = (props:CategoryAddProps) => {
const {register,handleSubmit,formState:{errors}} = useForm<TypeInputs>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<TypeInputs>=data=>{
    props.onAdd(data);
    navigate("/admin/category");
}
  return (
    <div>
      <button><Link to="/admin/categorys">Quay lai</Link></button>
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='Nhap ten...' {...register('name')} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
    </div>
  )
}

export default Category_add