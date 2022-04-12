import React, { useEffect, useState } from 'react'
import { ICarts } from '../type/Carts';
type Props={

}
const Carts = () => {
    const [cart,setCart]=useState<ICarts[]>([]);
    useEffect(()=>{
        const getCart = async ()=>{
            const {data} = await 
        }
    })
    let cart = [];
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart')as string);
    }
  return (
    <div>Carts</div>
  )
}

export default Carts