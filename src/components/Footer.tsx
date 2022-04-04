import React from 'react'

const Footer = () => {
  return (
    <div><div className="row ">
      <div className="col-2">
        <h5 className='text-white'>Về chúng tôi</h5>
        <ul className="nav flex-column ">
          <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">4S Fashion - Thời trang công sở đem lại sự tự tin, trẻ trung, phong cách cho mỗi ngày</a></li>
          <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">32 Võ Văn Dũng, Đống Đa, Hà Nội</a></li>
          <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">1900 2116</a></li>
          <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">(04) 7308 6680</a></li>
          <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">Web.nhanhhoa@gmail.com</a></li>
        </ul>
      </div>
      <div className="col-2">
        <h5 className='text-white'>Thương hiệu</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Giới thiệu</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tuyển dung</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Hệ thống cửa hàng</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Liên hệ</a></li>
          {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li> */}
        </ul>
      </div>
      <div className="col-2">
        <h5 className='text-white'>Hỗ trợ</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQS-Hỏi đáp</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Chính sách vận chuyển</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Hướng dẫn thanh toán</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kiểm tra đơn hàng</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Quy đổi hàng</a></li>
        </ul>
      </div>
      <div className="col-4 offset-1">
        <form>
          <h5 className='text-white'>Subscribe to our newsletter</h5>
          <p className='text-muted'>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
      </div>
  )
}

export default Footer