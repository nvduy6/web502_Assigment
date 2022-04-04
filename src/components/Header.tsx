import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useName } from '../utils/localStorage'
const Header = () => {
  const handlerRemove = () => {
    localStorage.removeItem('user')
  }
  return (

    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img style={{ width: "85px" }} src="https://fs-07.web4s.vn/uploads/plugin/setting/3/th-i-trang-cong-s-logo-1.png" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-secondary">Trang chủ</Link></li>
          <li><Link to="/products" className="nav-link px-2 text-white">Giới thiệu</Link></li>
          <li><Link to="/about" className="nav-link px-2 text-white">Sản phẩm</Link></li>
          <li><Link to="" className="nav-link px-2 text-white">Tin tức</Link></li>
          <li><Link to="" className="nav-link px-2 text-white">Liên hệ</Link></li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
        </form>
        {localStorage.getItem('user') ?
          (
            <div>
              <span>Hello: {useName()} </span>

              <button type="button" className="btn btn-primary secondary" onClick={handlerRemove}> Logout</button></div>

          ) : (
            <div className="text-end">
              <Link to="/signin" className="  me-2">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </Link>
              <Link to="/signup" >
                <button type="button" className="btn btn-warning">Sign-up</button>

              </Link>

            </div>
          )

        }
      </div>
    </div>
  )
}

export default Header