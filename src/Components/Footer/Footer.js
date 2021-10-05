import React from 'react';





const Footer = () => {
    return (
        <div className="bg-primary text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">JSON University Khulna, Bangladesh</h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                    <p>
                        <a href="#" className="text-white" style={{textDecoration:'none'}}>UGC </a>
                    </p>
                    <p>
                        <a href="#" className="text-white" style={{textDecoration:'none'}}>Ministry of Education </a>
                    </p>
                    <p>
                        <a href="" className="text-white" style={{textDecoration:'none'}}>Admission Notice </a>
                    </p>
                    <p>
                        <a href="" className="text-white" style={{textDecoration:'none'}}>Necessary Forms</a>
                    </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Contacts</h5>
                    <p>
                        <i className="fas fa-home mr-3">Khulna, Bangladesh</i>
                    </p>
                    <p>
                         <i className="fas fa-envelope mr-3">official@nwu.com</i>
                    </p>
                    <p>
                         <i className="fas fa-phone mr-3">+880 01799 99 99 99</i>
                    </p>
                    <p>
                         <i className="fas fa-print mr-3">+880 01500 00 00 00</i>
                    </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Contacts</h5>
                    <p>
                        <i className="fas fa-home mr-3">Khulna, Bangladesh</i>
                    </p>
                    <p>
                         <i className="fas fa-envelope mr-3">official@nwu.com</i>
                    </p>
                    <p>
                         <i className="fas fa-phone mr-3">+880 01799 99 99 99</i>
                    </p>
                    <p>
                         <i className="fas fa-print mr-3">+880 01500 00 00 00</i>
                    </p>
                </div>
                {/* <hr className="mb-4/> */}
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>Copyright ©️2021 All rights reserved by :  
                            <a href="#" style={{textDecoration:'none'}} ><strong className="text-warning"> JSON University</strong> </a> </p>
                    </div>

                </div>
            </div>

        </div>

    </div>
    );
};

export default Footer;