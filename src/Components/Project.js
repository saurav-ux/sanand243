// rfce
import React from 'react'
import ProjectCard from './ProjectCard';
import { Nav } from 'react-bootstrap';
import { TabContainer } from 'react-bootstrap';
import { Row ,Col,Tab} from 'react-bootstrap';

import { Container } from 'react-bootstrap';

function Project() {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "src\img\project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "src\img\project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "src\img\project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "src\img\project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl:"src\img\project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "src\img\project-img1.png",
        },
      ];
    
  return (
   <section className='project' id='project'>
    <Container>
       <Row>
        <Col>
        <h2>Project</h2>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or 
        a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
        <Tab.Container id='project-tab' defaultActiveKey="first">
                   <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-item-center' id='pills-tab'>
                 <Nav.Item>
                   <Nav.Link eventKey="first">Tab one</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="second">Tab Two</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="third">
                    Tab Three
                   </Nav.Link>
                 </Nav.Item>
               </Nav>
             <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project , index)=>{
                      return(
                       <ProjectCard 
                       key={index}
                       {...project}
                       />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Saurav</Tab.Pane>
              <Tab.Pane eventKey="third">Anand</Tab.Pane>
             </Tab.Content>
               </Tab.Container>
               
        </Col>

       </Row>
    </Container>
   </section>
  )
}

export default Project
