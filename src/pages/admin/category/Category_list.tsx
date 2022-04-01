import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../../type/Category'
import { Table,Space,Button,Breadcrumb } from 'antd';
type Props = {
    categorys: ICategory[];
    onRemoveCate: (id: number) => void
}
const Category_list = (props: Props) => {
  return(
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
              <tr>
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
  )
}

export default Category_list