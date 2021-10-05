import React from 'react';
import { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';


const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    return (
        <div className="courses-container">
            {/* <h1>Courses : {courses.length}</h1> */}
            {
                courses.map( courses => <Courses
                    key={courses.key}
                    courses={courses}></Courses>)
                
            }
  
        </div>
    );
};

export default Services;