import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import poster from '../../../images/poster.png';
import { FcAutomotive, FcGallery, FcPrivacy, FcAreaChart} from "react-icons/fc";
import { GiHealthNormal } from "react-icons/gi";
import Fade from 'react-reveal/Fade';



const Poster = () => {
  return (
    <Container className='bg-light'>
      <Row xs={1} md={6} lg={3} className='g-4'>
        <Col>
         <Fade left>
         <img className='img-fluid' src={poster} alt="" />
         </Fade>
        </Col>
        <Col>
         <Fade right>
         <p><FcAutomotive/> <span>Our vehicles are of much better quality.</span></p>
         </Fade>
         <br />
         <Fade right>
         <p><FcGallery/> <span>We store pictures of nature.</span></p>
         </Fade>
         <br />
         <Fade right>
         <p><FcPrivacy/> <span>We are aware of everyone's personality.</span></p>
         </Fade>
         <br />
         <Fade right>
         <p><GiHealthNormal/> <span>We are aware of everyone's health.</span></p>
         </Fade>
         <br />
         <Fade right>
         <p><FcAreaChart/> <span>Our journey is based on specific safe zone area.</span></p>
         </Fade>

        </Col>
      </Row>
    </Container>
  );
};

export default Poster;