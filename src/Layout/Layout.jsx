import React from 'react';
import Banner from '../Components/Banner/Banner';
import ChefContainer from '../Components/ChefContainer/ChefContainer';
import Blog from '../Components/Blog/Blog';

const Layout = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefContainer></ChefContainer>
            <Blog></Blog>
        </div>
    );
};

export default Layout;