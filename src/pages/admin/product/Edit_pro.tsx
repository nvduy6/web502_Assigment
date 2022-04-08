import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { read } from '../../../api/Product';
import { IProduct } from '../../../type/Product';
import { Breadcrumb } from 'antd';
import { ICategory } from '../../../type/Category';
import { listCate } from '../../../api/Category';
import axios from 'axios';
type Edit_proProps = {
    onUpdate: (product: IProduct) => void;
};
type TypeInputs = {
    name: string,
    price: number,
    image: string,
    desc: string
    category: string
}
const Edit_pro = (props: Edit_proProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const { id } = useParams();
    const [prouducts, setprouducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
            setprouducts(data)
        }
        getProduct();
    }, [])

    const [categorys, setCategory] = useState<ICategory[]>([]);
    useEffect(() => {
        const getCategorys = async () => {
            const { data } = await listCate();
            setCategory(data);
        }
        getCategorys();
    }, []);
    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duynv/image/upload";
        const CLOUDINARY_PRESET = "okwdgnez";
        const file = data.image[0];
        if (typeof file == 'object') {
                    const formdata = new FormData();
        formdata.append("file", file);
        formdata.append("upload_preset", CLOUDINARY_PRESET);
        const response = await axios.post(CLOUDINARY_API, formdata, {
          headers: {
            "Content-Type": "application/form-data"
          },
        });
        data.image = response.data.url;
        }

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
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="number" className="form-control" {...register('price')} />
                </div>
                {prouducts && (
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                        <img style={{width:"90px",height:"70px"}} src={prouducts.image} alt="" />
                        {/* <input type="file" className="form-control" {...register('image')} /> */}
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea cols={30} rows={5}{...register('desc')} />
                </div>
                <div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Danh mục sản phẩm
                        </label>
                        <div className="mt-1">
                            <select {...register('category')} id="category" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                                {/* <option>-- Chọn danh mục sản phẩm --</option> */}
                                {categorys.map((cate) => {
                                    return (
                                        <option value={cate._id}>{cate.name}</option >
                                    )

                                })}



                            </select>
                        </div>
                    </div >
                </div >
                <button>Update</button>
            </form>
        </div>
    )
}

export default Edit_pro