import React, { useEffect } from 'react'
import { useForm ,SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams,Link } from "react-router-dom"
import { getcate } from '../../../api/Category'
import { ICategory } from '../../../type/Category'
import { Table,Space,Button, Breadcrumb } from 'antd';
type Category_editProps={
    onUpdateCate:(categorys:ICategory)=>void;
}
type TypeInputs = {
    name:string
    slug:string

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
      console.log(id)
        props.onUpdateCate(data)
        navigate("/admin/categorys")
    }
    return (
    <div>
         <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/admin/categorys">Categorys</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit</Breadcrumb.Item>
        </Breadcrumb>
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