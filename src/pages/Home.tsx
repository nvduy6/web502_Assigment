import React, { useEffect, useState } from 'react'
import { list } from '../api/Product';
import { IProduct } from '../type/Product'
import { Breadcrumb, Rate } from 'antd';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Selider from '../components/Selider';
import Category from './Category';
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
      <section>
        <Selider />
      </section>
      <main className="container">
          <div className='mb-2'>
            <div className='py-2'>
              <h2 className="title-block-product text-center fs-2">Bộ sưu tập</h2>
              <div className="slogan text-center fs-5 ">Bộ sưu tập thu đông nổi bật với các họa tiết tinh tế lại có mức giá rẻ.</div>
            </div>
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }" style={{ position: 'relative', height: 410, marginTop: 20 }}>
              <div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ position: 'absolute', left: '0%', top: 0 }}>
                <div className="card">
                  <img style={{ height: "240px", width: "100%" }} src="https://fs-07.web4s.vn/uploads/plugin/custom_img/2018-06-25/custom-lg-08.jpg" />
                  <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ position: 'absolute', left: '33.3323%', top: 0 }}>
                <div className="card p-3">
                  <figure className="p-3 mb-0">
                    <blockquote className="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0 text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ position: 'absolute', left: '66.6647%', top: 0 }}>

                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer is a little bit longer..</p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                  </div>
                  <img style={{ height: "240px", width: "100%" }} src="https://fs-07.web4s.vn/uploads/plugin/custom_img/2018-06-25/custom-lg-05.jpg" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ position: 'absolute', left: '33.3323%', top: 171 }}>
                <div className="card bg-primary text-white text-center p-3">
                  <figure className="mb-0">
                    <blockquote className="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0 text-white">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="box-product  tabs-block  box-product-style2 box-st">
            <hr className='m-auto text-muted' style={{ width: "50% " }} />
            <h2 className="title-block-product text-center fs-2 py-2">
              Tất cả sản phẩm<br />
              <i className="icon-title-1" />
            </h2>
            <p className="slogan text-center fs-5">Tất cả sản phẩm của chúng tôi là những mẫu mới nhất được nhiều khách hàng quan tâm</p>
            <div>
              <Category />
            </div>
            <div className=" row g-4 row-cols-2 row-cols-lg-4 ">
          {products.map((item, index) => {
            return (
              <div className="feature col">
                <div className="owl-item" style={{ width: 293 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                    <Link className='text-decoration-none' to={`/producst/detail/${item._id}`}>
                      <div className="item-blogs clearfix">
                        <div className="img-blogs border border-secondary">
                          <img style={{ width: 293 }} src={item.image} className="img-item-product" />
                        </div>
                        <div className="info text-center mt-2">
                          <h4 className="title-product fs-4">
                            {item.name}
                          </h4>
                          <div className="price price-inline">
                            <p className="price-well text-danger fs-4">
                              Giá: {item.price} đ
                            </p>
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

        <div className="container mb-4">
          <div className="row ">
            <div className="col">
              <img style={{ width: "100%" }} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-6.jpg" alt="" />
            </div>
            <div className="col ">
              <img style={{ width: "100%" }} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-61.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="block-news box-product ">
          <hr className='m-auto text-muted' style={{ width: "50% " }} />
          <h2 className="title-block-product text-center py-2"> Tin tức &amp; Blog<br /> <i className="icon-title-1" />
          </h2>
          <div className="container">
            <Blog />
          </div>

        </div>
          </div>
        </main>

      {/* <div className="my-3 p-3 rounded shadow-sm album bg-light">
        <Breadcrumb style={{ margin: '8px 8px' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Home</Link></Breadcrumb.Item>
        </Breadcrumb>

        <div className=" row g-4 row-cols-2 row-cols-lg-4 ">
          {products.map((item, index) => {
            return (
              <div className="feature col">
                <div className="owl-item" style={{ width: 293 }}>
                  <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                    <Link className='text-decoration-none' to={`/producst/detail/${item._id}`}>
                      <div className="item-blogs clearfix">
                        <div className="img-blogs border border-secondary">
                          <img style={{ width: 293 }} src={item.image} className="img-item-product" />
                        </div>
                        <div className="info text-center mt-2">
                          <h4 className="title-product fs-4">
                            {item.name}
                          </h4>
                          <div className="price price-inline">
                            <p className="price-well text-danger fs-4">
                              Giá: {item.price} đ
                            </p>
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

        <div className="container mb-4">
          <div className="row ">
            <div className="col">
              <img style={{ width: "100%" }} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-6.jpg" alt="" />
            </div>
            <div className="col ">
              <img style={{ width: "100%" }} src="https://fashion01.web4s.vn/uploads/plugin/custom_img/2017-06-06/custom-banner-col-61.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="block-news box-product ">
          <hr className='m-auto text-muted' style={{ width: "50% " }} />
          <h2 className="title-block-product text-center py-2"> Tin tức &amp; Blog<br /> <i className="icon-title-1" />
          </h2>
          <div className="container">
            <Blog />
          </div>

        </div>

      </div> */}
    </div>
  )
}

export default Home