import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IProduct } from './type/Product';
import { add, list, remove, update } from './api/Product';
import { addcate, removeCate, listCate, updatecate } from './api/Category';
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
import Signup from './pages/layouts/Signup';
import Signin from './pages/layouts/Sigin';
import Category_edit from './pages/admin/category/Category_edit';
import PrivateRouter from './components/PrivateRouter';
import List_post from './pages/admin/posts/List_post';
import Add_post from './pages/admin/posts/Add_post';
import Edit_post from './pages/admin/posts/Edit_post';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategorys] = useState<ICategory[]>([])
  // --------------products-------------------
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  // add
  const onHandlerAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  // update
  const onHandlerUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }
  const removeItem = (id: number) => {
    // call api
    remove(id)
    // reRender
    setProducts(products.filter(item => item.id !== id))
  }
  // ---------------Category-------------------
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategorys(data);
    }
    getCategorys();
  }, [])
  // delete-----------------------------------
  const removecate = (id: number) => {
    removeCate(id)
    setCategorys(categorys.filter(item => item.id !== id))
  }
  // add------------------------------------------
  const onHandlerCate = async (category: ICategory) => {
    const { data } = await addcate(category);
    setCategorys([...categorys, data])
  }
  const onHandeleUpdateCate = async (category: ICategory) => {
    const { data } = await updatecate(category);
    setCategorys(categorys.map(item => item.id == data.id ? data : item));
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
              <Route path=":id/edit" element={<Edit_pro onUpdate={onHandlerUpdate} />} />
            </Route>
            <Route path='category'>
              <Route index element={<Category_list categorys={categorys} onRemoveCate={removecate} />} />
              <Route path='add' element={<Category_add name='duy' onAdd={onHandlerCate} />} />
              <Route path=':id/edit' element={<Category_edit onUpdateCate={onHandeleUpdateCate} />} />
            </Route>
            <Route path="posts">
              <Route index element={<List_post />} />
              <Route path='add' element={<Add_post/>}/>
              <Route path=':id/edit' element={<Edit_post/>}/>
            </Route>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
