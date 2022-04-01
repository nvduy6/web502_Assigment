import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/Product';
import { IProduct } from '../type/Product'
type Props = {

}
const DetailProduct = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProducts(data)
    }
    getProduct();
  }, [])
  console.log(products);


  return (
    <div>

<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
 
  <div className="col-auto d-lg-block">
  <img style={{width: '100%', height: 370}} src="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" alt="" />
  </div>
  <div className="col p-4 d-flex flex-column position-static">
    <strong className="d-inline-block mb-2 text-primary">World</strong>
    <h3 className="mb-0">{products.name}</h3>
    <div className="mb-1 text-muted">Gia:{products.price}</div>
    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="stretched-link">Continue reading</a>
  </div>
</div>

      {/* <div className="card shadow-sm" >
        <img src="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" alt="" />
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
      </div> */}
    </div>
  )
}

export default DetailProduct