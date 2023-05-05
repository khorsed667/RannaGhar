import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './ChefContainer.css'

const ChefContainer = () => {

    const [chef, setChef] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(chef => setChef(chef))
    },[])

    return (
        <div>
            <p className='text-center fs-3 fw-semibold'>Here meet with our Chefs...</p>
            <div className="chef-area text-center">
                {
                    chef.map(c => <Chef
                    key={c.id}
                    c={c}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefContainer;