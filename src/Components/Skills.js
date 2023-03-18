import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Row ,Container , Col} from 'react-bootstrap';
function Skills() {
   
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <section className='skill' id='skills'>
        <Container>
          <Row>
            <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or 
                    a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className='item'>
                  <img src="\img\cplusplus.png" alt="Image" className='imgg'/>
                  <h5 className='align'>C++</h5>
                </div>
                <div className='item'>
                <img src="\img\data-structure.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>DS</h5>
                </div>
                <div className='item'>
                <img src="\img\html.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>HTML5</h5>
                </div>
                <div className='item'>
                <img src="\img\css-3.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>CSS</h5>
                </div>
                <div className='item'>
                <img src="\img\java-script.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>JavaScript</h5>
                </div>
                 <div className='item'>
                <img src="\img\react.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>React</h5>
                </div>
                <div className='item'>
                <img src="\img\bootstrap.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>Bootstrap</h5>
                </div>
                <div className='item'>
                <img src="\img\sql.png" alt="Image"  className='imgg'/>
                  <h5 className='align'>SQL</h5>
                </div>

              </Carousel>
            </div>
            </Col>
          </Row>
        </Container>
        
      </section>
    </div>
  )
}

export default Skills
