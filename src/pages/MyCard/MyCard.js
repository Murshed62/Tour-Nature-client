import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyCard = (props) => {
  console.log(props.singleDetail);
  const {name, email, address, phone} = props.singleDetail;
  return (
    <div>
      <Col>
      <Card className='bg-light'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <p>{email}</p>
           <p>{address}</p>
           <p>{phone}</p> 
          </Card.Text>
        </Card.Body>
        <button className='w-25 mx-auto bg-info'>Confirm</button>
        <button className='w-25 mx-auto mt-2 bg-info'>Delete</button>
      </Card>
    </Col>
    </div>
  );
};

export default MyCard;