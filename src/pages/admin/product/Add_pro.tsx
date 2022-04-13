import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ICategory } from '../../../type/Category';
import { listCate } from '../../../api/Category';
import axios from 'axios';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
type ProductAddProps = {
  onAdd: (product: TypeInputs) => void;
}
type TypeInputs = {
  name: string,
  price: number,
  desc: string,
  image: string,
  category: string
}
const Add_pro = (props: ProductAddProps) => {
  const sChema =  yup.object({
    name:yup.string().required(),
    price:yup.number().positive().integer().required(),
    desc:yup.string().required(),
    image:yup.string(),
    category:yup.string().required(),
  })
  const [categorys, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategory(data);
    }
    getCategorys();
  }, []);
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>({resolver:yupResolver(sChema)});
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = async data => {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duynv/image/upload";
    const CLOUDINARY_PRESET = "okwdgnez";
    const file = data.image[0];
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", CLOUDINARY_PRESET);
    const response = await axios.post(CLOUDINARY_API, formdata, {
      headers: {
        "Content-Type": "application/form-data"
      },
    });
    data.image = response.data.url;
    props.onAdd(data);

    navigate("/admin/products")
  }
  return (
    <div>


      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/admin/products'>Product</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Add</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
          <input type="number" className="form-control" {...register('price')} />
          <p>{errors.price?.message}</p>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input type="file" className="form-control" {...register('image')} />
        </div>
        <p>{errors.image?.message}</p>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <textarea cols={30} rows={5}{...register('desc')} />
          <p>{errors.desc?.message}</p>

        </div>
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Danh mục sản phẩm
            </label>
            <div className="mt-1">
              <select {...register('category')} id="category" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                <option>-- Chọn danh mục sản phẩm --</option>
                {categorys.map((cate) => {
                  return (
                    <option value={cate._id}>{cate.name}</option >
                  )

                })}



              </select>
          <p>{errors.category?.message}</p>

            </div>
          </div >
        </div >
        <button type="submit" className="btn btn-primary">Add</button>
      </form >
    </div >
  )
}

export default Add_pro