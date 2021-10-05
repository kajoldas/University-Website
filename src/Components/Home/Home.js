import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState  } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';




const Home = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect ( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])


    return (
        
        <div>
                <img className="container py-4" src="https://www.commonapp.org/static/8b3a964fca0503900076b1308d16803e/university-leicester_1080.png" alt="" />
            {
                courses.map(courses => <Courses courses={courses} ></Courses>)
            }
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>


            <div className="container">
                <h1>Be The Part of Revolution of E-Learning</h1>
            </div>
            
        </div>
    );
};

export default Home;