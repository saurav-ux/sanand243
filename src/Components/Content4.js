import React from 'react'
import Product from './Product'
function Content4() {
  return (
    <>
      {/* Container-4 */}
     
<div className="product" id='content4'>
    <h2>TRENDING IN INDIAN WEAR</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        {/* <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra36.webp" alt=""/>
            </div>
            
        </div> */}
          <Product 
             id="128" 
             price={899}
             image="IMGG\myntra36.webp"
             cutprice ={234}
             off ={379}
              />
        <Product 
             id="129" 
             price={179}
             image="IMGG\myntra37.webp"
             cutprice ={34}
             off ={45}
              />
         <Product 
             id="130" 
             price={149}
             image="IMGG\myntra38.webp"
             cutprice ={43}
             off ={23}
              />
        <Product 
             id="131" 
             price={1299}
             image="IMGG\myntra39.webp"
             cutprice ={534}
             off ={379}
              />
        <Product 
             id="132" 
             price={179}
             image="IMGG\myntra40.webp"
             cutprice ={24}
             off ={79}
              />
        
        </div>
       
 
    </div>
</div>

<div className="product">
   
  <div className="product_container ">

     <div className='row m-4 '>
     <Product 
             id="133" 
             price={159}
             image="IMGG\myntra41.webp"
             cutprice ={54}
             off ={39}
              />
       <Product 
             id="134" 
             price={189}
             image="IMGG\myntra42.webp"
             cutprice ={74}
             off ={19}
              />
        <Product 
             id="135" 
             price={269}
             image="IMGG\myntra43.webp"
             cutprice ={34}
             off ={29}
              />
       <Product 
             id="136" 
             price={569}
             image="IMGG\myntra44.webp"
             cutprice ={134}
             off ={89}
              />
       <Product 
             id="137" 
             price={238}
             image="IMGG\myntra45.webp"
             cutprice ={120}
             off ={113}
              />
        
        </div>
       
 
    </div>
</div>
<br/>
    </>
  )
}

export default Content4
