import React from 'react' 
import { NavLink } from 'react-router-dom'
// import { Rating } from 'react-simple-star-rating'



export default function ProductCard({product,addItem, removeItem}) {
// function addToCart() {
//     props.setCartItems(props.cartItems + 1)
// }

// function deleteFromCart() {
//     if(props.cartItems > 0) {
//         props.setCartItems(props.cartItems - 1)
//     }
// }
    return (
      <div className='product-card'>
        <NavLink to={'product/'+product.id}>
         <img className='product-img' src={product.thumbnail}/>
            <p className='product-title'> {product.title}</p>
         <div className="product-info">
            <p className="price">{product.price}</p>
            <div className="reviews">
               
                <div className='rating'
                  style={{
                    direction: 'ltr',
                    fontFamily: 'sans-serif',
                    touchAction: 'none'
                  }}>
                    
                  {/* <Rating
                    initialValue={product.rating}
                    onClick={function noRefCheck(){}}
                    readonly
                    size={12}
                    /> */}
                    {/* <p> 
                    {props.rating.count}
                    </p> */}
                </div>
            </div>
         </div>
         </NavLink>
         {/* <p className='product-description'> {props.description}</p> */}
        <div className='action-btns'>

         <button onClick={() => addItem(product)}>add to cart</button>
         <button onClick={() => removeItem(product)}>remove from cart</button>
        </div>
       </div>
      )
   }
   