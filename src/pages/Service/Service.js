import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../Home/Services/Services';

const Service = () => {
  const [allbookings, setAllBookings] = useState([]);
  
  useEffect(()=>{
    fetch("https://evil-broomstick-73449.herokuapp.com/services")
    .then(res =>res.json())
    .then(data =>setAllBookings(data))
  },[]);
  
  return (
    <Container>
       <Row xs={1} md={6} lg={4} className='g-4'>
        {
       allbookings.map(booking => <Services 
      key={booking._id}
       booking={booking}
       ></Services>) 
        }
      </Row>
    </Container>
  );
};

export default Service;