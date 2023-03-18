import React from 'react'
import { Container } from 'react-bootstrap'
import {Row , Col} from 'react-bootstrap'



function Banner() {
  return (
    <div>
      <section className='banner' id='home'>
          <Container  className="align-items-center">
        <Row>
          <Col>
         
                    <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>{"Hi I'am Saurav Anand"} <span className='wrap'>Web Devloper</span></h1>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or 
                    a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <button onClick ={()=>{console.log('Clicked')}}> Let's Connect  <i class="fa-solid fa-arrow-right"></i> </button>   
                    </Col>
                  
                    </Row>    
                    <div >
                      <br/> 
                    <img src='\img\pexels-lukas-1420702.jpg'></img>
                    <br/> <br/>
                    </div>               
          </Container>
      </section>
    </div>
  )
}

export default Banner
