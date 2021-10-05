import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState  } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css'




const Home = (props) => {
   


    return (
        
        <div>
         
         <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{height:'600px'}}
                className="d-block w-100"
                src="https://www.commonapp.org/static/8b3a964fca0503900076b1308d16803e/university-leicester_1080.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{}}>Education is The Powerful Weapon</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height:'600px'}}
                className="d-block w-100"
                src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/b_AllSoulsquad.jpg?itok=tTcH-5ix"
                alt="Versity Campus"
                />
                <Carousel.Caption>
                <h3>Landmark To Create Future</h3>
                <p>Excelence in Teaching and Learning and Research to Transform your Life.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'600px'}}
                className="d-block w-100"
                src="https://static.javatpoint.com/top10-technologies/images/top-10-richest-universities-in-the-world5.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Supiror Quality</h3>
                <p>Be Inspire By Diverse Community , Discover yourself for Lifetime Achivement.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
            <div className="home-card-container">
                <div className="card-container">
                    <img className="card-img" src="https://i.ytimg.com/vi/uDAjHLXrTU0/maxresdefault.jpg" alt="" />
                    <h2 className="card-h">Science and Information Technology</h2>
                    <p>A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.</p>
                    <button  className="card-btn">Apply Now</button>
                </div>


                <div className="card-container">
                    <img className="card-img" src="https://www.sinnaps.com/wp-content/uploads/2018/06/small-business-entrepreneurship-min.jpg" alt="" />
                    <h2 className="card-h">Business & Entrepreneursh</h2>
                    <p>A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.</p>
                    <button className="card-btn">Apply Now</button>
                </div>


                <div className="card-container">
                    <img className="card-img" src="https://assets.everspringpartners.com/dims4/default/5fd63f7/2147483647/strip/true/crop/620x250+0+0/resize/620x250!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.amazonaws.com%2F0c%2F82%2Fbbd11c804f72abedb318768bbf2e%2Fphsocial-science.jpg" alt="" />
                    <h2 className="card-h">Humanities & Social Science</h2>
                    <p>A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.</p>
                    <button className="card-btn">Apply Now</button>
                </div>
            </div>















            <div className="container">
                <h1>Be The Part of Revolution of E-Learning</h1>
            </div>
            
        </div>
    );
};

export default Home;