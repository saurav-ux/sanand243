import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStateValue } from './StateProvider';


function Enav() {
  // {num}
  const [{basket},dispatch] = useStateValue();
  return (
    <Navbar bg="white" expand="lg" className='navbar fixed-top'>
      <Container fluid>
       <Link to="/"> <Navbar.Brand href="#"><img src='\img\myntralogo.png' id="logo2 "/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div className="bor a">  <Nav.Link href="#content1">  MEN</Nav.Link></div>
           <div className="bor b">  <Nav.Link href="#content2">WOMEN</Nav.Link></div>
           <div className="bor c"> <Nav.Link href="#content3">KIDS</Nav.Link></div>
           <div className="bor d">  <Nav.Link href="#content4">HOME & LIVING</Nav.Link></div>
            <div className="bor e">  <Nav.Link href="#content5">BEAUTY</Nav.Link>     </div>   
          </Nav>
          <Link to="/">   <dfn title="Login/Signup"> <a href="login.html"> <i class="fas fa-user-alt"></i> </a> </dfn> </Link>
           <Link to="/wishlist"> <dfn title="Wishlist">  <a href="wishlist.html"><i class="fas fa-heart"> {basket.length}</i></a>   </dfn></Link>
           <Link to="/">    <dfn title="Bag"> <a href="Shopping Bag.html" > <i class="fas fa-shopping-bag"></i> </a> </dfn></Link>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Enav;