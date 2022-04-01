import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ICategory } from '../../../type/Category';
import { listCate } from '../../../api/Category';
type ProductAddProps = {
  name: string,
  onAdd: (product: TypeInputs) => void;
}
type Props ={

}
type TypeInputs = {
  name: string,
  price: number,
  image: string,
  category:string
}
const Add_pro = (props: ProductAddProps) => {
const [categorys,setCategory] = useState<ICategory[]>([]);
useEffect(()=>{
  const getCategorys = async ()=>{
    const {data} = await listCate();
    setCategory(data);
  }
  getCategorys();
},[]);
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = data => {
    props.onAdd(data);
    // navigate("/admin/products")
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
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
          <input type="number" className="form-control" {...register('price')} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
          <input type="text" className="form-control" {...register('image')} />
        </div>
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Danh mục sản phẩm
            </label>
            <div className="mt-1">
              <select {...register('category')} id="category" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                <option>-- Chọn danh mục sản phẩm --</option>
                {categorys.map((cate)=>{
                  return(
                    <option value={cate._id}>{cate.name}</option >
                  )
                 
                })}
                


              </select>
            </div>
          </div >
          </div >
          <button type="submit" className="btn btn-primary">Add</button>
      </form >
    </div >
  )
}

export default Add_pro