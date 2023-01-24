export default function ProductCard(props) {
    function addToCart() {
        props.setCartItems(props.cartItems + 1)
    }
    function deleteFromCart() {
        if(props.cartItems > 0) {
            props.setCartItems(props.cartItems - 1)
        }
    }
        return (
          <div className='product-card'>
             <img className='product-img' src={props.image}/>
                <p className='product-title'> {props.title}</p>
             <div className="product-info">
                <p className="price">{props.price}</p>
                <div className="reviews">
                    <p className="rate">rating: {props.rating.rate} </p>
                    <p className="count">count: {props.rating.count} </p>
                </div>
             </div>
             {/* <p className='product-description'> {props.description}</p> */}
            
             <button onClick={() => addToCart()}>add to cart</button>
             <button onClick={() => deleteFromCart()}>remove from cart</button> 
           </div>
          )
       }
       