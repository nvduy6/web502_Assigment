import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../Category'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Selider from '../../components/Selider';

type Props = {}
const WebsiteLayout = (props: Props) => {
  return (
    <div className="warpper" style={{ width: '90%', margin: 'auto' }}>
      <div>
        <header className="p-3 mt-1 mb-2 bg-dark text-white">
          <Header />
        </header>
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
                  <img style={{ height: "240px", width: "100%" }} src="https://fs-07.web4s.vn/uploads/plugin/custom_img/2018-06-25/custom-lg-05.jpg" alt />
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
            <div>
              <Outlet />
            </div>
          </div>
        </main>

        <footer className="bg-dark p-4">
          <Footer />
        </footer>


      </div>

    </div>

  )
}

export default WebsiteLayout