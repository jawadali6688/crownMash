import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from './components/index'
function Layout() {
  return (
   <section>
    <div>
        <Header/>
    </div>
    <div className='mt-24 w-[95%] md:w-[92%] lg:w-[85%] mx-auto'>
   <Outlet/>
    </div>
    <div>
     <Footer/>
    </div>
   </section>
  )
}

export default Layout
