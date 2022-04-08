import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getcate } from '../api/Category';
import { ICategory } from '../type/Category'
import { IProduct } from '../type/Product';
import {read} from "../api/Product"
type Props ={

}
const DetailCate = (post:Props) => {
  
    const [category,setCategory] = useState<ICategory[]>([]);
    const {slug} = useParams();
    useEffect(()=>{
        const getCategory = async ()=>{
            const {data: {products}}= await getcate(slug);
            setCategory(products)
        }
        getCategory();
    },[slug])
    console.log(slug);
  return (
    <div className="row g-4 row-cols-2 row-cols-lg-4">
          {category.map((item, index) => {
            return (
              <div className="feature col">
                <div className="owl-item" style={{ width: 283 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                  <Link className='text-decoration-none' to={`/producst/detail/${item._id}`}>
                    <div className="item-blogs clearfix">
                      <div className="img-blogs">
                        <img style={{ width: 283 }} src={item.image} className="img-item-product" />
                      </div>
                      <div className="info">
                        <h4 className="title-product">
                            {item.name}
                        </h4>
                        <div className="price price-inline">
                        <p className="price-well text-danger fs-4">
                           Giá: {item.price} đ
                          </p>
                        </div>
                        {/* <div className="show-list">
                          <a href="javascript:void(0)" className="btn btn-main-2 btn-black-2 btn-shop-cart" item-id={32} product-id={32} status-store={0}>Mua hàng</a>
                        </div> */}
                        <div className="content-attr hidden">
                        </div>
                      </div>
                    </div>
                  </Link>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
  )
}

export default DetailCate