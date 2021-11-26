import React from 'react';
import './Banner.css'
import bannerP from '../../../images/banner/banner.jpeg';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';




const Banner = () => {
  return (
        
      <div className='banner'>
      <Fade>
      <img className='img-fluid w-100 img-custom' src={bannerP} alt="" />  
      </Fade>  
        <div className='heading'>
        <Flash>
        <h1><span className='text-info'>Welcome</span> to Our <span className='text-info'>Nature</span> </h1>
        <br />
        <h3 className='text-info'>Together</h3>
        <h2>We can heal</h2>
        <h1>The <span className='text-info'>Earth</span></h1>
        </Flash>
        <br /><br />
        <RubberBand>
        <Link to='/blog'><button className='bg-info fw-bold text-white read-btn btn-shadows'>Read More...</button></Link>
        </RubberBand>
        </div>          
      </div>
      
  );
};

export default Banner;