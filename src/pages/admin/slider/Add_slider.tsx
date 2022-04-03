import axios from 'axios'
import React, { useState } from 'react'
import{SubmitHandler,useForm} from "react-hook-form"
import { useNavigate,Link } from 'react-router-dom'
import {Breadcrumb} from "antd"
type Props = {
name:string
onAddslider:(sliders:InputsType)=>void;

}
type InputsType = {
    name: string
}
const Add_slider = (props: Props) => {
const {register,handleSubmit,formState:{errors}}=useForm<InputsType>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<InputsType>=async data=>{
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duynv/image/upload";
        const CLOUDINARY_PRESET = "okwdgnez";
        const file = data.name[0];
        const formdata = new FormData();
        formdata.append("file",file);
        formdata.append("upload_preset",CLOUDINARY_PRESET);
        const response = await axios.post(CLOUDINARY_API,formdata,{
          headers: {
                           "Content-Type": "application/form-data"
          },
        });
        data.name=response.data.url;
    props.onAddslider(data);
    navigate('/admin/sliders')
}
    return (
        <div>
            <div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/admin/sliders'>Slider</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Add</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/sliders/add">
            <button type="button" className="btn btn-success">Add</button>
          </Link>
        </div>
      </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input type="file" className="form-control" {...register('name')} />
        </div>
                <button>Them </button>
            </form>

        </div>
    )
}

export default Add_slider