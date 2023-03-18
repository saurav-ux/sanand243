import React from 'react'
import { useStateValue } from './StateProvider';
function CheckoutProduct(props) {
   {console.log('pricee',props.image)}
   const [{basket},dispatch] = useStateValue();
   function removeFromBag(){
     dispatch({
       type: "REMOVE_FROM_BASKET",
       id: props.id,
     })
   }
  return (
 <>
    <div className='disp'>
    <div className="item col-lg-2 col-sm-6 m-4">
         

          <div class="wishimg items_img">
              <img src={props.image} alt=""/>
          </div>
       

        <p> 
        Rs.{props.price} <del>  Rs.{props.cutprice} </del><cite> (Rs. {props.off} OFF)</cite></p> 
            <div class="move">
              <h4 onClick={removeFromBag}>REMOVE FROM BAG</h4>
          </div>
      </div>
  </div>

  

  </> 
  )
}

export default CheckoutProduct
