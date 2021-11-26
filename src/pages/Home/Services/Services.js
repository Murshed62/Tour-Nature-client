import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


import './Services.css'

const Services = (props) => {
const {_id, img, name, description, duration, cost} = props.service;

  return (
    <div className="card-two">
      <Col>
        <Fade bottom>
        <Card className='card-custom '>
          <Card.Img variant="top" src={img} className='img-size' />
          <Card.Body>
            <Card.Title><span>Tour place</span> : {name}</Card.Title>
            <Card.Text><span className='fw-bold'>Duration</span> : {duration}</Card.Text>
            <Card.Text><span className='fw-bold'>Per Person</span> : {cost}</Card.Text>
            <Card.Text><span className='fw-bold'>Description</span> : {description.slice(0, 70)}</Card.Text>
            <Link to={`/addbooking/${_id}`}>
            <button className='bg-info fw-bold text-white ms-5 ps-5 pe-5'>Book Now</button>
            </Link>
          </Card.Body>
        </Card>
        </Fade>
      </Col>
      
    </div>
  );
};

export default Services;