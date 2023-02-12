import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

import ProductCard from '../components/ProductCard';


export default function Home({cartItems, addItem, removeItem }) {
    const [products, setProducts] = useState([]);

    useEffect(() => { 
      fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json.products))}
        ,[])
  
    return (
      <main>
        {/* <Cart cartItems={cartItems} /> */}
          {products.map((product) =>
            // <NavLink to={'product/'+product.id}>
              <ProductCard 
                key={product.id}
              
                product={product}
                cartItems={cartItems}
                addItem={addItem}
                removeItem={removeItem}
                /> 
                //  </NavLink>
             )} 
        </main> 
    )
  }