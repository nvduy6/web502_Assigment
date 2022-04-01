import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getcate } from '../api/Category';
import { ICategory } from '../type/Category'
import { IProduct } from '../type/Product';
import {read} from "../api/Product"
type Props ={

}
const DetailCate = (post:Props) => {
  
    const [category,setCategory] = useState<ICategory[]>([]);
    const {slug} = useParams();
    useEffect(()=>{
        const getCategory = async ()=>{
            const {data}= await getcate(slug);
            setCategory(data)
        }
        getCategory();
    },[])
    console.log(slug);
  return (
    <div></div>
  )
}

export default DetailCate