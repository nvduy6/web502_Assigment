import React, { useEffect } from 'react'
import { useForm ,SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom"
import { getcate } from '../../../api/Category'
import { ICategory } from '../../../type/Category'
type Category_editProps={
    onUpdateCate:(category:ICategory)=>void;
}
type TypeInputs = {
    name:String
}

const Category_edit = (props:Category_editProps) => {
    const {register,handleSubmit,formState:{errors},reset}=useForm<TypeInputs>();  
    const navigate =  useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        const getCategory = async()=>{
            const {data} =await getcate(id);
            reset(data);
        }
        getCategory();
    },[])
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
        props.onUpdateCate(data)
        navigate("/admin/categorys")
    }
    return (
    <div>
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

export default Category_edit