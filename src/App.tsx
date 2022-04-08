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
import { notification, Slider } from 'antd';
import DetailProduct from './pages/DetailProduct';
import DetailCate from './pages/DetailCate';
import { IpSlider } from './type/Slider';
import { listSlider,addSlider, removeSlider } from './api/Slider';
import List_slider from './pages/admin/slider/List_slider';
import Add_slider from './pages/admin/slider/Add_slider';
import { IPost } from './type/Post';
import { addPost, listpost,removePost } from './api/Post';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategorys] = useState<ICategory[]>([]);
  const [sliiders, setSliders] = useState<IpSlider[]>([]);
  const [posts,setPosts] = useState<IPost[]>([]);
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
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  const removeItem = (id: number) => {
    const openNotification = () => {
      notification.open({
        message: 'Xóa Thành công',
      });
    };
    // call api
    openNotification()
    remove(id)
    // reRender
    setProducts(products.filter(item => item._id !== id))
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
    setCategorys(categorys.filter(item => item._id !== id))
  }
  // add------------------------------------------
  const onHandlerCate = async (category: ICategory) => {
    const { data } = await addcate(category);
    setCategorys([...categorys, data])
  }
  const onHandeleUpdateCate = async (category: ICategory) => {
    const { data } = await updatecate(category);
    setCategorys(categorys.map(item => item.slug == data.slug ? data : item));
  }
  // -------------------Slider------------------------
  useEffect(() => {
    const getSlider = async () => {
      const { data } = await listSlider();
      setSliders(data);
    }
    getSlider();
  }, []);
  const removeSliders = (id: number) => {
  removeSlider(id)
    setSliders(sliiders.filter(item => item._id!== id))
  }
 
  const onHandlerSlider = async (slider: IpSlider) => {
    const { data } = await addSlider(slider);
    setCategorys([...sliiders, data])
  }
  // --------------------post-------------------
  useEffect(()=>{
    const getPost = async () =>{
      const {data} = await listpost();
      setPosts(data);
    }
    getPost();
  },[]);
  const onHandlerPost = async (post:IPost)=>{
    const {data} = await addPost(post);
    setPosts([...posts,data])
  } 
  const removePosts = (id:number)=>{
    removePost(id)
    setPosts(posts.filter(item=>item._id!==id))
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='producst/detail/:id' element={<DetailProduct />} />
            <Route path='categorys/:slug' element={<DetailCate />} />
            <Route path='product' element={<h1>Hien thi san pham 123</h1>} />
            <Route path='about' element={<h1>About</h1>} />
          </Route>


          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter> }>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem} /></PrivateRouter> } />
              {/* <Route path="add" element={<Add_pro onAdd={onHandlerAdd} />} /> */}
              <Route path="add/:userId" element={<Add_pro onAdd={onHandlerAdd} />} />
              <Route path=":id/edit" element={<Edit_pro onUpdate={onHandlerUpdate} />} />
            </Route>
            <Route path='categorys'>
              <Route index element={<Category_list categorys={categorys} onRemoveCate={removecate} />} />
              <Route path='add' element={<Category_add name='duy' onAddcate={onHandlerCate} />} />
              <Route path=':slug/edit' element={<Category_edit onUpdateCate={onHandeleUpdateCate} />} />
            </Route>
            <Route path="posts">
              <Route index element={<List_post post={posts} onRemovePost={removePosts}/>} />
              <Route path='add' element={<Add_post onAddPost={onHandlerPost}/>} />
              <Route path=':id/edit' element={<Edit_post />} />
            </Route>
            <Route path='sliders'>
              <Route index element={<List_slider sliders={sliiders} onRemoveSlider={removeSliders}/>} />
              <Route path='add' element={<Add_slider name='duy' onAddslider={onHandlerSlider}/>}/>
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
