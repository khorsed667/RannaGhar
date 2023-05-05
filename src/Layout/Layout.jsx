import React from 'react';
import Banner from '../Components/Banner/Banner';
import ChefContainer from '../Components/ChefContainer/ChefContainer';
import Blog from '../Components/Blog/Blog';
import Speciality from '../Components/Speciality/Speciality';

const Layout = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefContainer></ChefContainer>
            <Blog></Blog>
            <Speciality></Speciality>
        </div>
    );
};

export default Layout;