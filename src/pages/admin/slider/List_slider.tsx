import React from 'react'
import { SubmitHandler,useForm } from 'react-hook-form'
import { IpSlider } from '../../../type/Slider'
import {Link} from "react-router-dom"
type Props={
  sliders:IpSlider[];
  onRemoveSlider:(id:number)=>void
}
const List_slider = (props:Props) => {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Thao tac</th>
      </tr>
    </thead>
    <tbody> 
      {props.sliders.map((item,index)=>{
        return(
          <tr>
        <th scope="row">{index+1}</th>
        <td><img src={item.name} alt="" /></td>
        <td>
        <button><Link to={`/admin/categorys/${item._id}/edit`}>Update</Link></button>
        <button onClick={()=>props.onRemoveSlider(item._id)}>Delete</button>
        </td>
      </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default List_slider