import React from 'react'
import Home from '../Home/page'
import Category from '../app/Category/page'
import { CartProvider } from "../context/CartContext";

const page = () => {
  return (
    <div><CartProvider>
       <Home />
       </CartProvider>
       <Category />
    </div>
  )
}

export default page