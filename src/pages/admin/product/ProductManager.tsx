import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IProduct } from '../../../type/Product'
import { Breadcrumb } from 'antd';
import { isAuthenticate } from '../../../utils/localStorage';
const {user} = isAuthenticate();



type Props = {
  products: IProduct[];
  onRemove: (id: number) => void
}
const ProductManager = (props: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to={`/admin/products/add/${user._id}`}>
          <button type="button" className="btn btn-success">Add</button>
          </Link>
          </div>
      </div>

      <div>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={item.image} alt="" width={50} />
                </td>
                {/* <td>{item.description}</td> */}
                <td>{item.category}
                  getone()

                </td>
                <td>
                  <button><Link to={`/admin/products/${item._id}/${user._id}/edit`}>Update</Link></button>
                  <button onClick={() => props.onRemove(item._id)}>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ProductManager