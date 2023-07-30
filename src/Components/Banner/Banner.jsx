import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='h-75'>
            <Carousel className='csl' fade>
                <Carousel.Item className='h-75 d-inline-block'>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/side-view-male-chef-flambeing-dish_23-2148763217.jpg?w=996&t=st=1687521301~exp=1687521901~hmac=748d97924f00ec12c292292124fd823c21ee456ad893882cfaf3bde524cce700"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/life-style_1122-1996.jpg?w=996&t=st=1687521260~exp=1687521860~hmac=c4d9e79fc6a6a4dc93b9e8e331ae692eb51b3e6f082616aa6a867924254c8958"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/chef-cooking-food-restaurant-kitchen_53876-67.jpg?w=996&t=st=1687522021~exp=1687522621~hmac=8dfb4cd8a918ab5eab9ed5a5788acb9faeee14ead0e6372bad5c8720efe7264f"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;