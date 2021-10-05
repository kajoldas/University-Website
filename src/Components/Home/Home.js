import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState  } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';





const Home = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect ( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    } , [])


    return (
        
        <div>
         

            <div className="container">
                <h1>Be The Part of Revolution of E-Learning</h1>
            </div>
            
        </div>
    );
};

export default Home;