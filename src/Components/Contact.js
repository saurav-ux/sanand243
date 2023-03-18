import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import {Row , Col} from 'react-bootstrap'

function Contact() {
    const formInitialDetails ={
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetail,setFormDetail] = useState(formInitialDetails);
    const [buttonText,setButtontext] = useState('send');
    const [status,setStatus] = useState({});

  return (
   <section className='contact' id='connect'>
         <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src='D:\React Course\portfolioo\src\img\contact-img.svg' alt='contact Us'></img>
                </Col>
            </Row>
         </Container>
   </section>
  )
}

export default Contact
