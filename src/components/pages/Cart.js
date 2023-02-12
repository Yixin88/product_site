import React from "react"
import { NavLink } from "react-router-dom"

export default function Cart({cartItems, removeItem}) {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {(cartItems.length > 0) ? 

                    cartItems.map((item,index) => 
                        <li className="product-card" key={index} >
                         <img className='product-img' src={item.thumbnail}/>
                        <p className='product-title'> {item.title}</p>
                        <p className="price">{item.price}</p>   
                        <p>{item.title}</p>
                        <button onClick={() => removeItem(item)}>remove from cart</button>
                        </li>) 
                    :
                    <div>
                        no items in cart. go
                        <NavLink to={'/'}> here</NavLink> to add some
                    </div>
            }

            </ul>
        </div>
    )
}