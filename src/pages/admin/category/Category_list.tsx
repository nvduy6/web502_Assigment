import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../../type/Category'
import { Table,Space,Button } from 'antd';
type Props = {
    categorys: ICategory[];
    onRemoveCate: (id: number) => void
}
const Category_list = (props: Props) => {
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
          title: 'TT',
          dataIndex: 'id',
          render: (id:number) => (
            <Space size="middle">
            <Button type="primary" style={{ background: '#FFCC00', color: '#000000', border: 'none', borderRadius:15}}><Link to={`/admin/categorys/${id}/edit`}>Edit</Link></Button>
            <Button type="primary" style={{borderRadius:15}} danger onClick={() => props.onRemoveCate(id)}>Remove</Button>
            </Space>
          )
        },
      
      ]
      const dataSource = props.categorys.map((item, index) => {
       
        return {
          
          key: index ,
          stt:index+1,
          name: item.name,
          id:item.id,
        }
      })
      return (<Table columns={columns} dataSource={dataSource} />)
}

export default Category_list