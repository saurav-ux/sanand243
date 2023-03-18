import Carousel from 'react-bootstrap/Carousel';

function Crousel1() {
  return (
    <div id='crousel'>
    <br/>  <br/> <br/> <br/> 
<Carousel fade id='crousel' >

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\myntra1.png"
          alt="First slide"
        />   
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\myntra2.png"
          alt="Second slide"
        />     
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\myntra3.png"
          alt="Third slide"
        />  
      </Carousel.Item>
</Carousel>
</div>
  );
}

export default Crousel1;