import React from 'react'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import CheckoutProduct from './CheckoutProduct';
// {array1}
function Wishlist() {
    // const thingsElements = array1.map(thing => <p key={thing}>{thing}</p>)
    const [{basket},dispatch] = useStateValue();
  
  return (
  <div>
        <p>  <br/><br/><br/><br/></p>
  


    <div>
    {basket.map(item=>{
      //  removeFromBag(item.id)
       console.log("IDDD",item.id)
      return(
       <>
        <CheckoutProduct
        id={item.id}
        image={item.image}
        price={item.price} 
        cutprice ={item.cutprice}
        off ={item.off} 
        />
     
    </>
      )
    })}
  </div> 
     <div className='checkout'>
      <hr></hr>
           <div>
               <p className='subtotal'>Subtotal({basket.length} items): Rs {getBasketTotal(basket)}</p>
           </div>    
           <div class="move move2">
               <h4 >Proceed to Checkout</h4>
           </div>
     </div>

 </div>
  )
}

export default Wishlist
