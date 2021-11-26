import React from 'react';
import nature1 from '../../../images/nature-1.png';
// import nature2 from '../../../images/nature-2.png';
import nature3 from '../../../images/nature-3.png';
import Rotate from 'react-reveal/Rotate';
// import Fade from 'react-reveal/Fade';



const Nature = () => {
  return (
    <div>
      <h2 className='text-center'>Our <span className='text-info'>Nature</span></h2>
      <br />
      <div className='row ms-auto me-5'>
   <div className='col-md-6'>
   <Rotate top left>
        <img className='mb-1' width='400px' src={nature1} alt="" />
          </Rotate> 
   </div>
   {/* <div className='col-md-4'>
   <Fade top right>
        <img width='400px' src={nature2} alt="" />
          </Fade> 
   </div> */}
   <div className='col-md-6'>
   <Rotate top right>
        <img width='400px' src={nature3} alt="" />
          </Rotate> 
   </div>
      </div>
    </div>
  );
};

export default Nature;



