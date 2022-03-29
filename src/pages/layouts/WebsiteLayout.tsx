import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../Category'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
type Props ={}
const WebsiteLayout = (props:Props) => {
  return (
   <div className="warpper" style={{width: '90%', margin: 'auto'}}>
  <header className="p-3 mb-3 border-bottom">
    <Header/>
  </header>
  {/* banner */}
  <section>
    <img style={{width: '100%', height: 370}} src="https://tse3.explicit.bing.net/th?id=OIP.kZSOUPzxEAMn6seSzjjmKwHaCU&pid=Api&P=0&w=465&h=145" alt="" />
  </section>
  <div className="d-grid gap-4" style={{gridTemplateColumns: '1fr 4fr'}}>
    {/* category */}
    <div className="bg-light border rounded-1">
     <Category/>
    </div>
    {/* San phẩm */}
    <div className="bg-light border rounded-3">
    <Outlet/>
    </div>
  </div>
  {/* footer */}
  <footer className="py-5">
   <Footer/>
  </footer>
</div>

  )
}

export default WebsiteLayout