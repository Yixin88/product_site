import React,{useState} from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  
} from "react-router-dom";

import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';

import ProductPage from './pages/Product.js'


function App() {
  const [cartItems, setCartItems] = useState([])
  // const [cartCounter, setCartCounter] = useState(0);

  function addItem(item) {
    setCartItems([ ...cartItems, item  ])
  }

  function removeItem(item) {
    setCartItems(cartItems.filter((itm) => itm !== item))
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cartCounter={cartItems.length} />}>
        <Route index element={<Home cartItems={cartItems} setCartItems={setCartItems} addItem={addItem} removeItem={removeItem}/>} />
        <Route path="about" element={<About />} /> 
        <Route path="cart" element={<Cart cartItems={cartItems} removeItem={removeItem}/>} /> 
  
        <Route path="product/:id" element={<ProductPage/>} /> 
  
      </Route>
    )
  ) 
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;