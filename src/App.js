import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const productObj = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
      "rate": 3.9,
      "count": 120
  }
}

function App() {
  const [products, setProducts] = useState([]);



  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json))}
      ,[])

console.log(products)
  const [cartItems, setCartItems] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='logo'>no-brand</h1>
        <hr />
      </header>
      <main>
        <Cart cartItems={cartItems}/>
        {products.map((product) =>
         <ProductCard 
          key={product.id}
          image={product.image}
          title={product.title} 
          description={product.description}
          rating={product.rating}
          price={product.price}
          
          setCartItems={setCartItems}
          cartItems={cartItems}
          />  )} 
        

      </main>

    </div>
  );
}

export default App;