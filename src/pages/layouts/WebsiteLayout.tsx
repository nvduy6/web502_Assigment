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
        <header className="p-3 mb-3 border-bottom">
          <Header />
        </header>
        <section>
          {/* <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div> */}
          <Selider />
        </section>
        <main className="container">
          <div>
            <div>
              <h2 className="title-block-product text-center">Bộ sưu tập</h2>
              <div className="slogan text-center">Bộ sưu tập thu đông nổi bật với các họa tiết tinh tế lại có mức giá rẻ.</div>
            </div>
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }" style={{ position: 'relative', height: 410, marginTop: 20 }}>
              <div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4" style={{ position: 'absolute', left: '0%', top: 0 }}>
                <div className="card">
                  <img src="https://fs-07.web4s.vn/uploads/plugin/custom_img/2018-06-25/custom-lg-08.jpg" alt />
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
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card">
                  <img src="https://fs-07.web4s.vn/uploads/plugin/custom_img/2018-06-25/custom-lg-05.jpg" alt />
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
            <h2 className="title-block-product text-center">
              Tất cả sản phẩm<br />
              <i className="icon-title-1" />
            </h2>
            <p className="slogan text-center">Tất cả sản phẩm của chúng tôi là những mẫu mới nhất được nhiều khách hàng quan tâm</p>
            <div>
              <Category />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </main>
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>

    </div>

  )
}

export default WebsiteLayout