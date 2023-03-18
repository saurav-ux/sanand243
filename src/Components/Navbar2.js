import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbar2() {
  const [dark,setDark] = useState(false);

  function theme(){
      setDark(prevData=>!prevData)
  }
  return (
    <div>
      <Navbar bg={dark ?"dark" : "light" } expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className={ dark? "text-light" : ""} >LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon' > </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ dark? "text-light" : ""}>Home</Nav.Link>
            <Nav.Link href="#skills"className={ dark? "text-light" : ""}>Skills</Nav.Link>
            <Nav.Link href="#project" className={ dark? "text-light" : ""}>Projects</Nav.Link>      
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon" >
              <i className="fa-brands fa-linkedin icon icon-color-1"  ></i>
                <i className="fa-brands fa-facebook icon icon-color-1"></i>
                <i className="fa-brands fa-instagram icon icon-color-2" ></i>
                <i className={ dark? "text-light dar" : "dar"}>Dark Mode</i>
            </div>
           
          
            <label class="switch">
              <input type="checkbox" onClick={theme}/>
              <span class="slider round round2"></span>
            </label>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar2
