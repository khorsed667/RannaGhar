import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import './ViewChef.css'

const ViewChef = ({ c }) => {

    const data = useLoaderData()

    const { chefName, id, yearsOfExperience, numRecipes, likes, picture } = data

    return (
        <div className='my-4'>
            <div style={{ height: '240px' }} className="chef-banner d-flex align-items-center">
                <div className="chef-area">
                    <img style={{ height: '240px' }} src={picture} alt="" />
                </div>
                <div className="chef-details">
                    <p>Hi, I am {chefName}</p>
                    <p>I've {yearsOfExperience} years of experience. And from my experience, i have did {numRecipes} recipies. From here, i am presenting you my best 6 recipies.</p>
                    <p>And this recipies got {likes} likes!</p>
                </div>
            </div>
        </div>
    );
};

export default ViewChef;