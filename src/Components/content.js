import React from 'react'

import Product from './Product';
// {callback}
function Content() {
//  () => callback()
  
  return (
    <>
    {/* Container-1 */}
    
    <br/><br/><br/><br/>
  <div className="product" id='content1'>
    <h2>DEALS OF THE DAY</h2>
    <br/><br/>

  <div className="product_container ">

     <div className='row m-4 pr'>
      
      
       
         
            <Product 
             id="123" 
             price={199}
             image="IMGG\myntra11.webp"
             cutprice ={234}
             off ={79}
              />
        
       
             <Product 
             id="124" 
             price={249}
             image="IMGG\myntra12.webp"
             cutprice ={344}
             off ={129}
              />
            
        

      
             <Product 
             id="125" 
             price={159}
             image="IMGG\myntra10.webp"
             cutprice ={34}
             off ={49}
              />
            
        
       
              <Product 
              id="126" 
              price={2999}
              image="IMGG\myntra13.webp"
              cutprice ={4234}
              off ={1279}
               />
    
      
             <Product 
             id="127" 
             price={99}
             image="IMGG\myntra14.webp"
             cutprice ={34}
             off ={49}
              />
            
        
        
        </div>
       
 
    </div>
</div>
<br/>

{/* Container2
<div className="product">
    <h2>BIGGEST DEALS ON TOP BRANDS</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra15.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
                <img src="IMGG\myntra16.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra17.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra18.webp" alt=""/>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <img src="IMGG\myntra19.jpg" alt=""/>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>
<br/><br/><br/> */}

{/* Container3

<div className="product2">
    <h2>CATEGORIES TO BAG</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <div class="images">
                   <img src="IMGG\myntra25.webp" alt=""/>
                   <br/>
                   <img src="IMGG\myntra26.webp" alt=""/>
               </div>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
               <div class="images">
                      <img src="IMGG\myntra27.webp" alt=""/>
                      <br/>
                      <img src="IMGG\myntra28.webp" alt=""/>
                  </div>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <div class="images">
                       <img src="IMGG\myntra29.webp" alt=""/>
                       <br/>
                       <img src="IMGG\myntra30.webp" alt=""/>
                   </div>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <div class="images">
                       <img src="IMGG\myntra31.webp" alt=""/>
                       <br/>
                       <img src="IMGG\myntra32.webp" alt=""/>
                 </div>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                    <div class="images">
                           <img src="IMGG\myntra33.webp" alt=""/>
                           <br/>
                           <img src="IMGG\myntra34.webp" alt=""/>
                       </div>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>
<br/><br/><br/> */}
{/* Container-4
<div className="product">
    <h2>TRENDING IN INDIAN WEAR</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra36.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
                <img src="IMGG\myntra37.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra38.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra39.webp" alt=""/>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <img src="IMGG\myntra40.webp" alt=""/>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>

<div className="product">
   
  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra41.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
                <img src="IMGG\myntra42.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra43.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra44.webp" alt=""/>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <img src="IMGG\myntra45.webp" alt=""/>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>
<br/> */}
{/* Container-5
<div className="product">
    <h2>TRENDING IN ACCESSORIES</h2>
    <br/><br/><br/>

  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra46.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
                <img src="IMGG\myntra47.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra48.jpg" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra49.webp" alt=""/>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <img src="IMGG\myntra50.webp" alt=""/>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>

<div className="product">
   
  <div className="product_container ">

     <div className='row m-4 '>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra51.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6  m-4">
            <div className="items_img">
                <img src="IMGG\myntra52.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra53.webp" alt=""/>
            </div>
            
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
                <img src="IMGG\myntra54.jpg" alt=""/>
            </div>   
        </div>
        <div className="item col-lg-2 col-sm-6 m-4">
            <div className="items_img">
               <img src="IMGG\myntra55.jpg" alt=""/>
            </div>
            
        </div>
        
        </div>
       
 
    </div>
</div>
<br/> */}

    </>
  )
}

export default Content
