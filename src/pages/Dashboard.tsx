import React from 'react'
import { Progress,Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
type Props={}
const Dashboard = (props:Props) => {
  return (
   <div> 
             <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Page</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
     <Progress type="circle" percent={75} />
   <Progress type="circle" percent={70} status="exception" />
   <Progress type="circle" percent={100} /></div>

  )
}

export default Dashboard