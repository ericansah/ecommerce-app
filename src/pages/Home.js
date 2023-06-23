import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
       <section className='home-wrapper-1 py-5'>
           <div className='container-xxl'>
               <div className='row'>

                   <div className='col-6'>
                      <div className='main-banner position-relative'>
                          <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner'/>

                          <div className='main-banner-content position-absolute'>
                            <h4>REACH MULTI BUYERS.</h4>
                            <h5>SELL FAST.</h5>
                            <p>From GH₵999.00 or GH₵41.62/mo.</p>
                            <Link className='button'>BUY NOW</Link>
                          </div>
                      </div>
                   </div>


                   <div className='col-6'>
                      <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'> 

                      <div className='small-banner position-relative'>
                          <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='laptop'/>
                          <div className='small-banner-content position-absolute'>
                            <h4>Best Sale.</h4>
                            <h5>Laptops.</h5>
                            <p>From GH₵1600.00.</p>
                          </div>
                      </div>

                      <div className='small-banner position-relative'>
                          <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='laptop'/>
                          <div className='small-banner-content position-absolute'>
                            <h4>15% OFF.</h4>
                            <h5>SmartWatch.</h5>
                            <p>From GH₵500.00.</p>
                          </div>
                      </div>

                      <div className='small-banner position-relative'>
                          <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='laptop'/>
                          <div className='small-banner-content position-absolute'>
                            <h4>New Arrival.</h4>
                            <h5>IPad Air.</h5>
                            <p>From GH₵1000.00.</p>
                          </div>
                      </div>

                      <div className='small-banner position-relative'>
                          <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='laptop'/>
                          <div className='small-banner-content position-absolute'>
                            <h4>Pure Sound.</h4>
                            <h5>Headphones.</h5>
                            <p>From GH₵200.00.</p>
                          </div>
                      </div>

                      </div>
                   </div>
              </div> 
           </div>
       </section>



       < section className='home-wrapper-2 py-5'>
          <div className='container-xxl'>
             <div className='row'>
                <div className='col-12'>
                    <div className='services d-flex align-items-center justify-content-between'>

                      <div className='d-flex align-items-center gap-15'>
                          <img src='images/delivery-xxl.png' alt='services'/>
                          <div>
                            <h6>Fast Shipping</h6>
                            <p className='mb-0'>Nationwide</p>
                          </div>
                      </div>


                      <div className='d-flex align-items-center gap-15'>
                          <img src='images/gift-xxl.png' alt='services'/>
                          <div>
                            <h6>Special Offers</h6>
                            <p className='mb-0'>Huge Saving</p>
                          </div>
                      </div>

                      
                      <div className='d-flex align-items-center gap-15'>
                          <img src='images/headset-xxl.png' alt='services'/>
                          <div>
                            <h6>Support 24/7</h6>
                            <p className='mb-0'>Shop with peace of mind</p>
                          </div>
                      </div>


                      <div className='d-flex align-items-center gap-15'>
                          <img src='images/sale-xxl.png' alt='services'/>
                          <div>
                            <h6>Affordable Prices</h6>
                            <p className='mb-0'>Get vendor direct prices</p>
                          </div>
                      </div>


                      <div className='d-flex align-items-center gap-15'>
                          <img src='images/bank-cards-xxl.png' alt='services'/>
                          <div>
                            <h6>Secure Payments</h6>
                            <p className='mb-0'>100% Protected Payment</p>
                          </div>
                      </div>


                    </div>
                </div>
             </div>
          </div>
       </section>


       
       < section className='home-wrapper-2 py-5'>
          <div className='container-xxl'>
             <div className='row'>
                <div className='col-12'>

                    <div className='categories d-flex align-items-center flex-wrap justify-content-between'>
                      
                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Gaming</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/ps-game.jpg' alt='gaming'/>
                      </div>

                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>


                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>


                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>

                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Gaming</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/ps-game.jpg' alt='gaming'/>
                      </div>

                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>


                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>


                      <div className='d-flex align-items-center'>
                          <div>
                            <h6>Camera</h6>
                            <p className='mb-0'>10 items</p>
                          </div>
                          <img src='images/camera.jpg' alt='services'/>
                      </div>
                    </div>


                </div>
             </div>
          </div>
       </section>

    </>
  );
}

export default Home;