import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
        <img style={{ width: 20, height: 25 }} src="https://logonoid.com/images/bootstrap-logo.png" />
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-secondary">Overview</NavLink></li>
        <li><NavLink to="/products" className="nav-link px-2 link-dark">Inventory</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-dark">Customers</NavLink></li>
        <li><NavLink to="/signup" className="nav-link px-2 link-dark">Products</NavLink></li>
      </ul>
    {/* {localStorage.getItem('user')} */}
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
      </form>
      <div className="text-end">
        <Link to="/signin" className="  me-2">
          <button type="button" className='btn btn-light text-dark' >
            Login
          </button>
        </Link>
        <Link to="/signup" >
          <button type="button" className="btn btn-primary secondary">
            Sign-up
          </button>
        </Link>
      </div>

      {/* <div className="dropdown text-end">
      <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> */}
    </div>
  )
}

export default Header