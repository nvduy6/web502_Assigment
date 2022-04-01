import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate,useParams,Link} from 'react-router-dom';
import { read } from '../../../api/Product';
import { IProduct } from '../../../type/Product';
import {Breadcrumb } from 'antd';
type Edit_proProps={
    onUpdate:(product:IProduct)=>void;
};
type TypeInputs={
    name:string,
    price:number,
    image:string,
}
const Edit_pro = (props:Edit_proProps) => {
const {register,handleSubmit,formState:{errors},reset}=useForm<TypeInputs>();
const navigate = useNavigate();
const {id}=useParams();
useEffect(()=>{
    const getProduct = async ()=>{
        const {data} = await read(id);
        reset(data);
    }
    getProduct();
},[])
const onSubmit:SubmitHandler<TypeInputs>= data=>{
    // console.log(data)
    props.onUpdate(data);
    navigate("/admin/products")
}
  return (
    <div>
        <div>
 <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to='/admin/products'>Product</Link></Breadcrumb.Item>
    <Breadcrumb.Item>Edit</Breadcrumb.Item>
  </Breadcrumb>
  </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="number" {...register('price')} />
            </div>
            <button>Update</button>
        </form>
    </div>
  )
}

export default Edit_pro