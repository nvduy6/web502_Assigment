import React, { useEffect, useState } from 'react'
import { useForm ,SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams,Link } from "react-router-dom"
import { get, getcate } from '../../../api/Category'
import { ICategory } from '../../../type/Category'
import { Breadcrumb } from 'antd';
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
    const {slug} = useParams();
    const [categorys, setCategory] = useState<ICategory[]>([]);
    useEffect(()=>{
        const getCategory = async()=>{
            const {data} =await get(slug);
            reset(data.category);
            console.log(slug)
        }
        getCategory();
    },[])
    console.log(slug)
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
      // console.log(data)
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