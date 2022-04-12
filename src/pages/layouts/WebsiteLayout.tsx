import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../Category'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Selider from '../../components/Selider';

type Props = {}
const WebsiteLayout = (props: Props) => {
  return (
    <div className="warpper" style={{ width: '90%', margin: 'auto' }}>
      <div>
        <header className="p-3 mt-1 mb-2 bg-dark text-white">
          <Header />
        </header>
        {/* <section>
          <Selider />
        </section> */}
        <div>
          <Outlet/>
        </div>

        <footer className="bg-dark p-4">
          <Footer />
        </footer>


      </div>

    </div>

  )
}

export default WebsiteLayout