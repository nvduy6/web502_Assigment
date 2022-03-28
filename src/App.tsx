import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IProduct } from './type/Product';
import { add, list, remove, update } from './api/Product';
import { addcate, removeCate, listCate } from './api/Category';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Add_pro from './pages/admin/product/Add_pro';
import ProductManager from './pages/admin/product/ProductManager';
import Category_add from './pages/admin/category/Category_add';
import { ICategory } from './type/Category';
import Category_list from './pages/admin/category/Category_list';
import Edit_pro from './pages/admin/product/Edit_pro';
import Product from './components/Product';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategorys] = useState<ICategory[]>([])
  useEffect(()=>{
  const getProducts = async()=>{
    const {data} = await list();
    setProducts(data);
  }
  getProducts();
  },[])

  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategorys(data);
    }
    getCategorys();
  }, [])

  // delete-----------------------------------
  const removeItem = (id: number) => {
    // call api
    remove(id)
    // reRender
    setProducts(products.filter(item => item.id !== id))
  }

  const removecate = (id: number) => {
    removeCate(id)
    setCategorys(categorys.filter(item => item.id !== id))
  }
  // add------------------------------------------
  const onHandlerAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }

 const onHandlerUpdate = async (product:IProduct)=>{
   const {data} = await update(product);
   setProducts(products.map(item=>item.id==data.id?data:item));
 }
  const onHandlerCate = async (category: ICategory) => {
    const { data } = await addcate(category);
    setCategorys([...categorys, data])
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<h1>Hien thi san pham 123</h1>} />
            <Route path='about' element={<h1>About</h1>} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path='add' element={<Add_pro name='duy' onAdd={onHandlerAdd} />} />
              <Route path=":id/edit" element={<Edit_pro onUpdate={onHandlerUpdate}/>}/>
            </Route>
            <Route path='categorys'>
              <Route index element={<Category_list categorys={categorys} onRemoveCate={removecate} />} />
              <Route path='add' element={<Category_add name='duy' onAdd={onHandlerCate} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
