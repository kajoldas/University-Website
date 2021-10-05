import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Courses.css'


const Courses = (props) => {
    
    // console.log(props.courses);
    const {img, subject_title, course_fee, course_duration,detail} = props.courses;
    return (
        <div className="mycontainer">
         
           {Array.from({ length: 1 }).map((_, idx) => (
           <Col>
           <Card  className="card">
           <Card.Img  className="img"   variant="top" src={img}  />
           <Card.Body>
           <Card.Title>
              <h2
              className="h2">Subject Title:{subject_title}</h2>
           </Card.Title>
           <Card.Text>
           {detail}
          </Card.Text>
           <Card.Text> 
            <h3>Courses Fee:{course_fee}</h3>
              <h5>Course Duration:{course_duration}</h5>
           
          </Card.Text>
        
        </Card.Body>
      </Card>
    </Col>
  ))}



        </div>
    );
};

export default Courses;