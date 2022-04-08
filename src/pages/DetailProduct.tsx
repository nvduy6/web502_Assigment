import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { read } from '../api/Product';
import { IProduct } from '../type/Product'
import { Breadcrumb, Rate } from 'antd';
import Item from 'antd/lib/list/Item';
import Product from '../components/Product';
type Props = {

}
const DetailProduct = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProducts(data)
    }
    getProduct();
  }, [])
  console.log(products);


  return (
    <div>
      <Breadcrumb style={{ margin: '8px 8px' }}>
        <Breadcrumb.Item><Link to="/">Trang chủ</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item>{products.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

        <div className="col-auto d-lg-block">
          <img style={{ width: '100%', height: 370 }} src={products.image} alt="" />
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong className="d-inline-block mb-2 text-primary">World</strong> */}
          <h2 className="mb-0 red">{products.name}</h2>
          <hr style={{width:"50%"}}/>
          <div className="mb-1 text-danger fs-4">Giá :{products.price} đ</div>
          <p className="card-text mb-auto fs-5">{products.desc}</p>
          <div className='d-flex flex-row'>
          <button className='border-0' style={{width:"45px",height:"45px"}}>-</button>
          <input style={{width:"50px",height:"45px"}} type="number" />
          <button className='border-0' style={{width:"45px",height:"45px"}}>+</button>
          </div>
          
          <a href="#" className="stretched-link mt-4"><button type="button" className="btn btn-success">Them vào giỏ hàng</button>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default DetailProduct