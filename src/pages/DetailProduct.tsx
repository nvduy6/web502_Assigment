import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/Product';
import { IProduct } from '../type/Product'
type Props = {

}
const DetailProduct = (props:Props) => {
    const [products,setProducts]=useState<IProduct[]>([]);
    const {id}=useParams();
    useEffect(()=>{
        const getProduct = async ()=>{
            const {data} = await read(id);
            setProducts(data)
        }
      getProduct();
    },[])
console.log(products);


  return (
    <div>
        <div className="card shadow-sm" >
                  <img src="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" alt="" />
                  {/* <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
                  <div className="card-body">
                    <p className="card-text">{products.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">عرض</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">تعديل</button>
                      </div>
                      <small className="text-muted">{products.price}</small>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default DetailProduct