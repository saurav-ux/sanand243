import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title,description,imgUrl}) {
  return (
   <Col sm={6} md ={4}>
    <div className='proj-imgbx'>
        <img src={imgUrl}></img>
        <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>   
    </div>
   </Col>
  )
}

export default ProjectCard
