import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import { read } from '../../../api/Product';
import { IProduct } from '../../../type/Product';
type Edit_proProps={
    onUpdate:(product:IProduct)=>void;
};
type TypeInputs={
    name:String,
    price:Number,
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
    console.log(data)
    props.onUpdate(data);
    navigate("/admin/products")
}
  return (
    <div>
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