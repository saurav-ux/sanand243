import React from 'react'
import Product from './Product'
function Content5() {
  return (
    <>
      {/* Container-5 */}
      <br/>
<div className="product" id='content5'>
    <h2>TRENDING IN ACCESSORIES</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        {/* <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra46.webp" alt=""/>
            </div>
            
        </div> */}
         <Product 
             id="138" 
             price={299}
             image="IMGG\myntra46.webp"
             cutprice ={124}
             off ={15}
              />
       <Product 
             id="139" 
             price={399}
             image="IMGG\myntra47.webp"
             cutprice ={114}
             off ={76}
              />
        <Product 
             id="140" 
             price={259}
             image="IMGG\myntra48.jpg"
             cutprice ={234}
             off ={79}
              />
       <Product 
             id="141" 
             price={549}
             image="IMGG\myntra49.webp"
             cutprice ={134}
             off ={47}
              />
       <Product 
             id="142" 
             price={879}
             image="IMGG\myntra50.webp"
             cutprice ={434}
             off ={479}
              />
        
        </div>
       
 
    </div>
</div>

<div className="product">
   
  <div className="product_container ">

     <div className='row m-4 '>
       <Product 
             id="143" 
             price={999}
             image="IMGG\myntra51.webp"
             cutprice ={134}
             off ={75}
              />
       <Product 
             id="144" 
             price={599}
             image="IMGG\myntra52.webp"
             cutprice ={475}
             off ={65}
              />
      <Product 
             id="145" 
             price={679}
             image="IMGG\myntra53.webp"
             cutprice ={345}
             off ={196}
              />
       <Product 
             id="146" 
             price={869}
             image="IMGG\myntra54.jpg"
             cutprice ={341}
             off ={571}
              />
       <Product 
             id="147" 
             price={2989}
             image="IMGG\myntra55.jpg"
             cutprice ={1211}
             off ={199}
              />
        
        </div>
       
 
    </div>
</div>
<br/>
    </>
  )
}

export default Content5
