import React, { useEffect, useState } from 'react'
import { list } from '../api/Product';
import { IProduct } from '../type/Product'
import { Table,Space,Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Blog from './Blog';
type Props = {
}
const Home = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  return (
    <div>
      <div className="album py-2 bg-light">
      <Breadcrumb style={{ margin: '8px 8px' }}>
          <Breadcrumb.Item><Link to='/admin/dashboard'>Home</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 px-2">
          {products.map((item, index) => {
            return (
              <div className="col">
                <div className="card shadow-sm" key={index}>
                  <img src="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" alt="" />
                  {/* <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="https://tse2.mm.bing.net/th?id=OIP.cqGiNayt3c9N7MY1vAE6sQHaHa&pid=Api&P=0&w=177&h=177" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">عرض</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">تعديل</button>
                      </div>
                      <small className="text-muted">{item.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            )

          })}

        </div>
      </div>
      {/* bài viết */}
      <div className="container marketing">
        <Blog />
        {/* /.col-lg-4 */}
      </div>
    </div>
  )
}

export default Home