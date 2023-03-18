import React from 'react'
import { useStateValue } from './StateProvider';
function Product({id,image,price,cutprice,off}) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log("Basket:",basket);

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id, 
          image: image,
          price: price,
          cutprice :cutprice,
          off:off,
        },
      });
    };
  return (
    
       <div className="item col-lg-2 col-sm-6 m-4">
            {/* <div className="items_img">
                <img src={image} alt=""/>
                <strong>{price}</strong>
            </div>
            <div>
                <button onClick={ addToBasket}>Add to Cart</button>
            </div>           */}

            <div class="wishimg items_img">
                <img src={image} alt=""/>
            </div>
         

          <p> 
          Rs.{price} <del>  Rs.{cutprice} </del><cite> (Rs. {off} OFF)</cite></p> 
              <div class="move">
                <h4 onClick={ addToBasket}>MOVE TO BAG</h4>
            </div>
        </div>
    
  )
}

export default Product
