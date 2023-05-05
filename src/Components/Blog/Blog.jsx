import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import './Blog.css'

const Blog = () => {

    const [blog, setBlog] = useState([]);

    console.log(blog)

    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
        <div className='my-4'>
            <p className='text-center fs-3 fw-semibold'>Blogs about our rannaGhar</p>
            <div className='blog-section'>
            {
                blog.map(blg => <Blogs
                key={blg.id}
                blg={blg}
                ></Blogs>)
            }
            </div>
        </div>
    );
};

export default Blog;