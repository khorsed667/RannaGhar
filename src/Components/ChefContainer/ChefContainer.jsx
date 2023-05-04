import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefContainer = () => {

    const [chef, setChef] = useState([])
    console.log(chef);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(chef => setChef(chef))
    },[])

    return (
        <div>
            <p className='text-center'>This is Chef Container</p>
            <div className="chef-area">
                {
                    
                }
            </div>
        </div>
    );
};

export default ChefContainer;