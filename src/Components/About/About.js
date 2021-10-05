import React from 'react';

const About = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-start align-items-start p-5 border m-5 rounded">
            <h2 className=" "> About US</h2>
            <p>Json University is the Leading University in Bangladesh. And promises World class Education through the world. There are lots of subjects to study for. </p>
            </div>

            <div className="d-flex flex-column justify-content-start align-items-start p-5 border m-5 rounded">
                <h4>Contact Us:</h4>
                <h5>Phone: 04255555 </h5>
                <h5>Address: Gulshan, Dhaka 1200.</h5>


            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5 border m-5 rounded">
                <input className="my-4 px-5 p-2" type="text" />
                <input className="bg-primary text-white border border-primary" type="submit" value="Send Feedback" />
            </div>
            
        </div>
    );
};

export default About;