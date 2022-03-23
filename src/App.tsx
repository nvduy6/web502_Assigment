import { useEffect, useState } from 'react';
import { Routes,Route,NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IProduct } from './type/Product';
import { add, list, remove } from './api/Product';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';

import Dashboard from './pages/Dashboard';
import Add_pro from './pages/admin/product/Add_pro';
import ProductManager from './pages/admin/product/ProductManager';

function App() {
  const [count, setCount] = useState(0)
const [products,setProducts]=useState<IProduct[]>([]);
useEffect(()=>{
const getProducts = async()=>{
  const {data} = await list();
  setProducts(data);
}
getProducts();
},[])
const removeItem = (id:number)=>{
  // call api
  remove(id)
  // reRender
  setProducts(products.filter(item=>item.id!==id))
}
const onHandlerAdd = async (product:IProduct)=>{
  const {data} = await add(product);
  setProducts([...products,data])
}

  return (
    <div className="App">
      <main>
        <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
         <Route index element = {<Home/>}/>
         <Route path='product' element={<h1>Hien thi san pham 123</h1>}/>
          <Route path='about' element={<h1>About</h1>}/>
        </Route>

        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route index element={<ProductManager products={products} onRemove={removeItem}/>}/>
                    <Route path='add' element={<Add_pro name='duy' onAdd={onHandlerAdd}/>}/>
                </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
