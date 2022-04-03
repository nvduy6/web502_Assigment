import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { IpSlider } from '../type/Slider';
import { listSlider } from '../api/Slider';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Selider = () => {
  const [slider, setSlider] = useState<IpSlider[]>([]);
  useEffect(() => {
    const getSlider = async () => {
      const { data } = await listSlider();
      setSlider(data);
    }
    getSlider();
  }, [])
  return (

    <Carousel autoplay>
      {slider.map((item, index) => {
        return (
          <div>

            <img style={{ width: '100%',height:'380px'}} src={item.name} alt="" />

          </div>
        )
      })}
      {/* <div>
        <img style={{ width: '100%' }} src="https://tse4.mm.bing.net/th?id=OIP.m9SyakCFfT0zbDwGfanqMgHaCp&pid=Api&P=0&w=439&h=157" alt="" />
      </div>
      <div>
        <img style={{ width: '100%' }} src="https://tse1.mm.bing.net/th?id=OIP.CXW_7sk55G4Mf8_mY1TicwHaCo&pid=Api&P=0&w=416&h=148" alt="" />
      </div>

      <div>
        <img style={{ width: '100%' }} src="https://tse2.mm.bing.net/th?id=OIP.lyp8wle0JVK8_-lbYkhgWgHaCp&pid=Api&P=0&w=389&h=139" alt="" />
      </div> */}
    </Carousel>
  )
}

export default Selider