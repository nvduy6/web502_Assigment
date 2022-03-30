import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IProduct } from '../../../type/Product'
import { Table,Space,Button, Breadcrumb } from 'antd';
type Props = {
  products: IProduct[];
  onRemove: (id: number) => void
}
const ProductManager = (props: Props) => {
  const columns = [
    {
      title: 'Stt',
      dataIndex: 'stt',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'TT',
      dataIndex: 'id',
      render: (id:number) => (
        <Space size="middle">
        <Button type="primary" style={{ background: '#FFCC00', color: '#000000', border: 'none',borderRadius:15}}><Link to={`/admin/products/${id}/edit`}>Edit</Link></Button>
        <Button type="primary" style={{borderRadius:15}} danger onClick={() => props.onRemove(id)}>Remove</Button>
        </Space>
      )
    },
  
  ]
  const dataSource = props.products.map((item, index) => {
    return {
      key: index ,
      stt:index+1,
      name: item.name,
      price: item.price,
      id:item._id,
    }
  })
  return (
    <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <Button type="primary" style={{ background: '#FFCC00', color: '#000000', border: 'none',borderRadius:15}}><Link to="/admin/products/add">Them moi</Link></Button>
        <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default ProductManager