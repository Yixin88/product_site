import React, { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
// import { Rating } from 'react-simple-star-rating'



export default function Product() {
    let {id} = useParams();

    const [product, setProduct] = useState(
      {
        id: 0,
        title: "",
        price:0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    }
    );
 
    useEffect(() => { 
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setProduct(json))}
        ,[])


return (
    <div className='product-page'>
           <img className='product-img' src={product.image}/>
            <p className='product-title'> {product.title}</p>
            <div className="product-info">
            <p className="price">{product.price}</p>
                <div className='rating'
                    style={{
                    direction: 'ltr',
                    fontFamily: 'sans-serif',
                    touchAction: 'none'}}>
                    {/* <Rating
                    initialValue={product.rating.rate}
                    onClick={function noRefCheck(){}}
                    readonly
                    size={12}
                    /> */}
                    {/* <p> 
                    {props.rating.count}
                    </p> */}
                </div>
            {/* </div> */}

            </div>
            
    </div>

)

}