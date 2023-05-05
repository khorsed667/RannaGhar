import React from 'react';
import './Footer.css'

const Footers = () => {
    return (
        <div className='bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-area">
                        <h4>About Us</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-area">
                        <h4>Our Menu</h4>
                        <ul>
                            <li>Lunch Menu</li>
                            <li>Dinner Menu</li>
                            <li>Drinks Menu</li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-area">
                        <h4>Contact Us</h4>
                        <p>123 Main Street<br />Anytown, USA 12345</p>
                        <p>Phone: 555-123-4567<br />Email: info@restaurant.com</p>
                        <ul className="list-inline text-area">
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
                < hr style={{color:"white"}}/>
                <div className="row">
                    <div className="col-md-6 text-area">
                        <p>&copy; 2023 Restaurant Name. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <ul className="list-inline text-area">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;