import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Courses = (props) => {
    
    // console.log(props.courses);
    const {img, subject_title, course_fee, course_duration,detail} = props.courses;
    return (
        <div>
            
           

             <Container>
                <Row >
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{subject_title}</Card.Title>
                            <Card.Text>{detail} </Card.Text>
                            <Card.Text>Course Fee: {course_fee} </Card.Text>
                            <Card.Text>Course Duration: {course_duration} </Card.Text>
                            <Button variant="primary" className="bg-primary text-white">Apply Now</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container> 


                {/* <Container className="my-col">
                    <Row>
                        <Col md={3}>
                            <img  src={img}  alt="img"/>
                            {subject_title}
                            {detail} 
                            Course Fee: {course_fee}
                            Course Duration: {course_duration} 
                            <Button variant="primary" className="bg-primary text-white">Apply Now</Button>
                        </Col>
                    </Row>

                </Container> */}
        </div>
    );
};

export default Courses;