import React from 'react'
import {Header, Home} from './components/index'
function Layout() {
  return (
   <section>
    <div>
        <Header/>
    </div>
    <div className='mt-24'>
    <Home/>
    </div>
   </section>
  )
}

export default Layout
