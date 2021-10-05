import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  
    return (
       
        <div className="mt-3 bg-primary px-4 py-5" >
           
            <div className="header"> 
                 <div>< img className="logo" src={logo} alt="" /></div>
               
                <div className="fs-1 text-white ">JSON University</div>
              
           </div>

            <div className="nav">
            <div className="my-4 ">
            <NavLink to="/home" className="bg-primary  text-white text-decoration-none px-4 h4 py-3 "> Home</NavLink>
            <NavLink to="/services" className="bg-primary text-white text-decoration-none px-4 h4 py-3"> Services</NavLink>
            <NavLink to="/about" className="bg-primary text-white text-decoration-none px-4 h4 py-3"> About</NavLink>
            <NavLink to="/admission" className="bg-primary text-white text-decoration-none px-4 h4 py-3"> Admission</NavLink>
            </div>
            </div>
           
        </div>
    );
};

export default Header;