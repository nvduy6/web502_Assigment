import React, { useEffect, useState } from 'react'
import { list } from '../api/Product';
import { IProduct } from '../type/Product'
import { Breadcrumb, Rate } from 'antd';
import { Link } from 'react-router-dom';
import Blog from './Blog';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
type Props = {
}
const Home = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  return (
    <div>
      <div className="my-3 p-3 rounded shadow-sm album bg-light">
        {/* <Breadcrumb style={{ margin: '8px 8px' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Home</Link></Breadcrumb.Item>
        </Breadcrumb> */}

        <div className=" row g-4 row-cols-2 row-cols-lg-4 ">
          {products.map((item, index) => {
            return (
              <div className="feature col">
                <div className="owl-item" style={{ width: 293}}>
                  <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                  <Link className='text-decoration-none' to={`/producst/detail/${item._id}`}>
                    <div className="item-blogs clearfix">
                      <div className="img-blogs">
                        <img style={{ width: 293 }} src={item.image} className="img-item-product" />
                      </div>
                      <div className="info text-center">
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

        <div className="container mb-4">
          <div className="row ">
            <div className="col">
             <img style={{width:"100%"}} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-6.jpg" alt="" />
            </div>
            <div className="col">
             <img style={{width:"100%"}} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-61.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="block-news box-product ">
        <hr className='m-auto text-muted' style={{width:"50% "}}/>
          <h2 className="title-block-product text-center py-2"> Tin tức &amp; Blog<br /> <i className="icon-title-1" />
          </h2>
          <div className="container">
            <Blog />
          </div>

        </div>

      </div>
      </div>
      )
}

      export default Home