import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IpSlider } from '../../../type/Slider'
import { Link } from "react-router-dom"
import { Breadcrumb } from "antd";
type Props = {
  sliders: IpSlider[];
  onRemoveSlider: (id: number) => void
}
const List_slider = (props: Props) => {
  return (
    <div>

      <div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Slider</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/sliders/add">
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
          {props.sliders.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img style={{ width: '200px', height: '100px' }} src={item.name} alt="" /></td>
                <td>
                  <button><Link to={`/admin/slider/${item._id}/edit`}>Update</Link></button>
                  <button onClick={() => props.onRemoveSlider(item._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List_slider