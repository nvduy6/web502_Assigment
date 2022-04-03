import axios from 'axios'
import React, { useState } from 'react'
import{SubmitHandler,useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

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
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Image</label>
                    <input type="file" {...register('name')}/>
                </div>
                <button>Them </button>
            </form>

        </div>
    )
}

export default Add_slider