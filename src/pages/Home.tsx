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
      <div className="album py-2 bg-light">
        <Breadcrumb style={{ margin: '8px 8px' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Home</Link></Breadcrumb.Item>
        </Breadcrumb>

        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col">
                <div className="owl-item" style={{ width: 283 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                  <Link to={`/producst/detail/${item._id}`}>
                    <div className="item-blogs clearfix">
                      <div className="img-blogs">
                        <img style={{ width: 283 }} src={item.image} className="img-item-product" />
                      </div>
                      <div className="info">
                        <h4 className="title-product">
                            {item.name}
                        </h4>
                        <div className="price price-inline">
                          <p className="price-well">
                            {item.price}
                          </p>
                        </div>
                        <div className="show-list">
                          <a href="javascript:void(0)" className="btn btn-main-2 btn-black-2 btn-shop-cart" item-id={32} product-id={32} status-store={0}>Mua hàng</a>
                        </div>
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

        <div className="container">
          <div className="row">
            <div className="col">
              1 of 2
            </div>
            <div className="col">
              2 of 2
            </div>
          </div>
        </div>
        <div className="block-news box-product ">
          <h2 className="title-block-product text-center"> Tin tức &amp; Blog<br /> <i className="icon-title-1" />
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