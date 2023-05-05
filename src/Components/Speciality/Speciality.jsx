import React from 'react';

const Speciality = () => {
    return (
        <div className='my-4'>
            <div className="speciality-div d-flex">
                <div className="img-section">
                    <img src="https://img.freepik.com/free-photo/fresh-red-bell-pepper-wooden-plank-against-background-kitchen-interior_169016-9608.jpg" alt="" />
                </div>
                <div className="text-section ps-4">
                    <p className='fs-3 fw-bolder'>Our Speciality:</p>
                    <ul>
                        <li className='fs-5 fe-semibolder py-2'>We have a unique identity and personality that sets us apart.</li>
                        <li className='fs-5 fe-semibolder py-2'>We provide a consistent brand experience across all touchpoints.</li>
                        <li className='fs-5 fe-semibolder py-2'>We emphasize quality in all aspects of the dining experience.</li>
                        <li className='fs-5 fe-semibolder py-2'>We have a strong social media presence to connect with our customers.</li>
                        <li className='fs-5 fe-semibolder py-2'>We are involved in the local community and give back whenever possible.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Speciality;