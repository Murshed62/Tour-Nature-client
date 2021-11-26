import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import './Home.css';
import Nature from './Nature/Nature';
import Poster from './Poster/Poster';
import Services from './Services/Services';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch("https://evil-broomstick-73449.herokuapp.com/services")
    .then(res => res.json())
    .then(data => setServices(data))
  },[]);

  return (
    <div>
      <Banner></Banner>
      <br /><br /><br />
      <h2 className='d-flex justify-content-center'>Popular<span className='text-info ps-2 fw-bold'>options</span></h2>
      <hr className='w-25 mx-auto'/>
      <br />
      <Container>
      <Row xs={1} md={6} lg={3} className='g-4'>
        {
       services.map(service => <Services
       service={service}
       ></Services>)
        }
      </Row>
      <hr/>
      <br /><br />
      <Poster></Poster>
      <br /><br />
      <Contact></Contact>
      <br /><br />
      <Nature></Nature>
      </Container>
    </div>
  );
};

export default Home;


