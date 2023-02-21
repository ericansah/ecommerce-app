import React from 'react'
import {Link} from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
          <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-5'>
                        <div className='footer-top-data d-flex gap-15 align-items-center'>
                            <img src='images/news-letter.png' alt='newsleter'/>
                            <h2 className='mb-0 text-white'>
                            Sign Up Newsleter
                            </h2>
                        </div>
                    </div>
                    <div className='col-7'>

                    <div className="input-group">
                     <input type="text" className="form-control py-1" placeholder="Your Email Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"/>
                     <span className="input-group-text text-black p-2" id="basic-addon2">Subscribe</span>
                    </div>
                      
                    </div>
                </div>
            </div>
    </footer>

    <footer className='py-4'>

    <div className='container-xxl'>
           <div className='row'>
               <div className='col-3'>
                   <h4 className='text-white mb-4'>Contact Us</h4>
                   <div>
                    <address className='text-white fs-6'>
                      111 Main Indusrial Park, <br /> Pumpside Road, <br /> Assin Foso, CR <br /> Post Code: 1221106
                    </address>

                    <a className='mt-3 d-block mb-1 text-white' href="tel:+44 7542699106">+44 7542699106</a>

                    <a className='mt-2 d-block mb-0 text-white' href="mailto:donkomi@mail.com">donkomi@mailexample.com</a>

                    <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                         <a className='text-white' href='' alt="social icons"><BsFacebook className='fs-4'/></a>
                         <a className='text-white' href='' alt="social icons"><BsTwitter className='fs-4'/></a>
                         <a className='text-white' href='' alt="social icons"><BsInstagram className='fs-4'/></a>
                         <a className='text-white' href='' alt="social icons"><BsPinterest className='fs-4'/></a>
                    </div>
                   </div>
               </div>

               <div className='col-2'>
                   <h4 className='text-white mb-4'>Information</h4>
                   <div className='footer-links d-flex flex-column'>
                      <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                      <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                      <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                      <Link className='text-white py-2 mb-1'>Terms of Service</Link>
                      <Link className='text-white py-2 mb-1'>Blogs</Link>
                   </div>
               </div>

               <div className='col-2'>
                   <h4 className='text-white mb-4'>Account</h4>
                   <div className='footer-links d-flex flex-column'>
                      <Link className='text-white py-2 mb-1'>Search</Link>
                      <Link className='text-white py-2 mb-1'>About Us</Link>
                      <Link className='text-white py-2 mb-1'>FAQ</Link>
                      <Link className='text-white py-2 mb-1'>Contact</Link>
                      <Link className='text-white py-2 mb-1'>Size Chart</Link>
                   </div>
               </div>

               <div className='col-2'>
                   <h4 className='text-white mb-4'>Quick Links</h4>
                   <div className='footer-links d-flex flex-column'>
                      <Link className='text-white py-2 mb-1'>Accessories</Link>
                      <Link className='text-white py-2 mb-1'>Laptops</Link>
                      <Link className='text-white py-2 mb-1'>Headphones</Link>
                      <Link className='text-white py-2 mb-1'>Tablets</Link>
                      <Link className='text-white py-2 mb-1'>watches</Link>
                   </div>
               </div>

               <div className='col-3'>
                   <h4 className='text-white mb-4'>Our App</h4>
                   <div className='text-white'>
                      <p className='mb-1 py-2'>Download our App and get extra 15% discount on your first order.</p>
                   </div>
                   <div className='app_store d-flex align-items-center gap-15 mt-4'>
                         <a className='text-white' href='https://play.google.com/store/' alt="social icons"> <img src='images/google-play.png' alt='compare'/></a>
                         <a className='text-white' href='https://www.apple.com/app-store/' alt="social icons"> <img src='images/app-store.png' alt='compare'/></a>
                    </div>
               </div>
           </div>
       </div>

    </footer>

    <footer className='py-4'>
       <div className='container-xxl'>
           <div className='row'>
               <div className='col-12'>
                   <p className='text-center mb-0 text-white'>
                    {new Date().getFullYear()} &copy; Copyright. All Rights Reserved. Donkomi.com
                   </p>
               </div>
           </div>
       </div>
    </footer>
        
    
    </>
  );
}

export default Footer;