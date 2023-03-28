import React from 'react'
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
    <div className='col-3'>
        <div className='blog-card'>

            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>

            <div className='blog-content'>
                <p className='date'>1 Jan 2023</p>
                <h5 className='title'>Head line title</h5>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque 
                massa placerat duis ultricies. Ornare suspendisse sed nisi lacus. 
                </p>
                <Link to="/" className='button'>Read More</Link>  
            </div>
    
        </div>
    </div>

    </>
  );
}

export default BlogCard