import React from 'react'
import { Progress } from 'antd';
type Props={}
const Dashboard = (props:Props) => {
  return (
   <div> <Progress type="circle" percent={75} />
   <Progress type="circle" percent={70} status="exception" />
   <Progress type="circle" percent={100} /></div>

  )
}

export default Dashboard