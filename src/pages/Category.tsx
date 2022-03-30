import React, { useEffect, useState } from 'react'
import { listCate } from '../api/Category';
import { ICategory } from '../type/Category'
type Props = {
  // categorys: ICategory[];
}
const Category = (props: Props) => {
  const [category,setCategory] = useState<ICategory[]>([])
  useEffect(()=>{
    const getCategorys = async()=>{
      const {data} =await listCate();
      setCategory(data);
    }
    getCategorys();
  },[])
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '100%', height: '100%' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Danh mục sản phẩm</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">

       {category.map((item,index)=> {
         return <li key={index}>
         <a href="#" className="nav-link text-white">
           <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg> {item.name}
         </a>
       </li>
       })}



        
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg> Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" width={32} height={32} className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Category