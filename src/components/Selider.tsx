import React from 'react'
import { Carousel } from 'antd';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Selider = () => {
  return (
    <Carousel autoplay>
      <div>
        {/* <h3 style={{
          height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
        }}>
         
        </h3> */}
        <img style={{ width:'100%' }}  src="https://tse4.mm.bing.net/th?id=OIP.m9SyakCFfT0zbDwGfanqMgHaCp&pid=Api&P=0&w=439&h=157" alt="" />
      </div>
      <div>
            <img style={{ width:'100%' }}  src="https://tse1.mm.bing.net/th?id=OIP.CXW_7sk55G4Mf8_mY1TicwHaCo&pid=Api&P=0&w=416&h=148" alt="" />
      </div>
      <div>
        
            <img style={{ width:'100%' }} src="https://tse1.mm.bing.net/th?id=OIP.KDaNo3vPbY2LAJzEa2zhlAHaCU&pid=Api&P=0&w=642&h=201" alt="" />
      
      </div>
      <div>
          <img style={{ width:'100%' }}  src="https://tse2.mm.bing.net/th?id=OIP.lyp8wle0JVK8_-lbYkhgWgHaCp&pid=Api&P=0&w=389&h=139" alt="" />
      </div>
    </Carousel>
  )
}

export default Selider