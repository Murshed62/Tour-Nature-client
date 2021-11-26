import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutpic from '../../images/about.png'
import './About.css'
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <Container>
      <div>
      <Fade top>
      <img className='img-fluid about-img' src={aboutpic} alt="" />
      </Fade>
      </div>
    <Row>
    <Fade left>
    <h1 className='fw-bold text-info'>Dreams of Nature</h1>
    <p><span className='text-info fw-bold'>Match life with nature</span></p>
    <br />
    <p>Bangladeshis are essentially simple in nature. Since time immemorial they are noted for their valour and resilience as well as hospitality and friendliness. Bangladeshis are also equally known for their creativity. They have an innate quality of open mindedness. Communal or ethnic feeling is alien to them and despite diverse racial mix from pre-historic days they are, by and large, a homogeneous group. Almost all the people speak and understand Bangla, a language which occupies an exalted position because of the richness of its literature. Generally speaking, fish, rice and lentils constitute the main diet of the masses, the vast majority of whom live in the country's villages.</p>
    <h4>Extra Advantage</h4>
    <hr className='w-50'/>
    <ul>
      <li className='text-info hvr-eft'>Personal Guide</li>
      <li className='text-info hvr-eft'>Healthcare</li>
      <li className='text-info hvr-eft'>Help to track safely</li>
      <li className='text-info hvr-eft'>Extra Security</li>
      <li className='text-info hvr-eft'>Extra Entertainment</li>
    </ul>
    </Fade>
   
   
  
    
    
   
  </Row>
  </Container>
  );
};

export default About;