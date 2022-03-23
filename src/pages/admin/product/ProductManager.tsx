import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../type/Product'
type Props = {
  products: IProduct[];
  onRemove: (id: number) => void
}
const ProductManager = (props: Props) => {
  return (
    <div>

      <h1><Link to="/admin/products/add">Thêm mới</Link></h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Uerd</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={()=>props.onRemove(item.id)}>Remove</button>
                  <button>Update</button>
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