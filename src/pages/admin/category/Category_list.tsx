import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../../type/Category'
import { Breadcrumb } from 'antd';
type Props = {
    categorys: ICategory[];
    onRemoveCate: (id: number) => void
}
const Category_list = (props: Props) => {
  return(
    <div>
<div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Category</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/categorys/add">
          <button type="button" className="btn btn-success">Add</button>
          </Link>
          </div>
      </div>
   
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody> 
          {props.categorys.map((item,index)=>{
            return(
              <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td>
            <button><Link to={`/admin/categorys/${item._id}/edit`}>Update</Link></button>
            <button onClick={()=>props.onRemoveCate(item._id)}>Delete</button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
      </div>
  )
}

export default Category_list