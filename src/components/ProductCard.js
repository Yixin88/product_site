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
             <img className='product-img' src={props.imgUrl}/>
             <h2 className='product-title'> {props.name}</h2> 
             <p className='product-description'> {props.description}</p>
    
             <button onClick={() => addToCart()}>add to cart</button>
             <button onClick={() => deleteFromCart()}>remove from cart</button> 
           </div>
          )
       }
       
       