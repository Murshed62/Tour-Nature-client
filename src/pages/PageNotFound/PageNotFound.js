import React from 'react';
import { Link } from 'react-router-dom';
import pagenotfound from '../../images/pagenotfound.jpg'

const PageNotFound = () => {
  return (
    <div>
    <img className='img-fluid' src={pagenotfound} alt="" />
    <Link className='btn btn-info d-block mx-auto w-25' to='/home'>Back To Home</Link>
  </div>
  );
};

export default PageNotFound;