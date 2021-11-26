import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
// import svg1 from '../../images/undraw_contact_us_-15-o2.svg'
// import svg2 from '../../images/undraw_profile_data_re_v81r.svg'


const Contact = () => {
  return (
    <Container>
     <Row>
       <Col>
      {/* <Fade left>
      <img width='500px' src={svg1} alt="" />
      </Fade> */}
       </Col>
        <Col>
        <div>
    <>
    <form className="d-grid">
        <Fade top>
        <h2>
          Describe <span className="text-info">Yourself</span>
        </h2>
        <input className='input-custom' type="text" placeholder="Enter your full name" />
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="address" placeholder="Enter your valid address" />
        <br />
        <input type="number" placeholder="Enter your valid phone number" />
        <br />
        <input type="text" placeholder="What nature you like(optional)" />
        <br />  
        </Fade>
        <Fade bottom>
        <button className='send-btn pt-1 pb-1 ps-2 pe-2 bg-info'>Send us</button>
        <br />
        <p><span className='text-primary fw-bold'>We contact you within 2hrs <BsFillEmojiHeartEyesFill/></span></p>
        </Fade>
    
      </form>
  

</>
    </div>
        </Col>
        <Col>
        {/* <Fade right>
        <img width='450px' src={svg2} alt="" />
        </Fade> */}
        </Col>
      </Row>
   </Container>
  );
};

export default Contact;