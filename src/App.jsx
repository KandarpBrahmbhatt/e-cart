import { useState } from 'react'

import './App.css'
import Navbar from './componentes/Navbar'
import Product from './componentes/Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './componentes/Cart';
import ProductDetail from './componentes/ProductDetail';
import SearchItem from './componentes/SearchItem';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />  {/*dynamic route aa lakhiyu kahe 6e [detail page mate] darek page ni alag id hoy aetle aane dynamic route banay 6e.*/}
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
