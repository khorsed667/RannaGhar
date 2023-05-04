import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footers from '../Components/Footer/Footers';
import { Container } from 'react-bootstrap';
import ChefContainer from '../Components/ChefContainer/ChefContainer';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </Container>
    );
};

export default Main;