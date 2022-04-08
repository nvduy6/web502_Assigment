import React from 'react'
import { Table, Space, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import { IPost } from '../../../type/Post';
type Props = {
  post: IPost[];
  onRemovePost:(id:number)=>void;
}
const List_post = (props: Props) => {
  return (
    <div>
    <div className="row">
        <div className="col-11"> <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Category</Breadcrumb.Item>
        </Breadcrumb></div>
        <div className="col-1">
          <Link to="/admin/posts/add">
            <button type="button" className="btn btn-success">Add</button>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Desc</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          {props.post.map((item, index) => {
            return (
              <tr key={index}>
            <th scope="row">{index++}</th>
            <td>{item.title}</td>
            <td><img style={{width:"80px",height:"40px"}} src={item.image} alt="" /></td>
            <td>{item.desc}</td>
            <td>
            <td>
                  <button><Link to={`/admin/products/${item._id}/edit`}>Update</Link></button>
                  <button onClick={() => props.onRemovePost(item._id)}>Delete</button>
                </td>

            </td>

          </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default List_post