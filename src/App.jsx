import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import {Home, Hours, About, Contact, Pricings} from './components/index'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
  <>
<Router>
<ScrollToTop/>
  <Routes>
    <Route path="" element = {<Layout/>}>
    <Route path= "" element = {<Home/>}/>  
    <Route path= "/opening-hours" element = {<Hours/>}/>
    <Route path= "/About-us" element = {<About/>}/>
    <Route path= "/contact-us" element = {<Contact/>}/>
    <Route path= "/menu-&-pricing" element = {<Pricings/>}/>
    </Route>
  </Routes>
</Router>
  </>
  )
}

export default App
