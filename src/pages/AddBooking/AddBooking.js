import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './AddBooking.css';


const AddBooking = () => {
  const {user} = useAuth();
  const [details,setDetails]=useState();
  const {addbookingId} = useParams();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
  axios.post('https://evil-broomstick-73449.herokuapp.com/bookings', data)
  .then(res =>{
if(res.data.insertedId){
 alert('added successfully');
 reset();
}
  })
  };

  useEffect(()=>{
    fetch("https://evil-broomstick-73449.herokuapp.com/services")
    .then(response => response.json())
    .then(data =>{const details=data.find(detail=>(detail._id) === addbookingId)
      setDetails(details)
    });

  },[]);

  return (
    <Container className='my-5'>
      <Row>
        <Col>
        <Card style={{width:"350px"}}>
        <Card.Img  variant="top" src={details?.img} />
        <Card.Body >
          <Card.Title>{details?.name}</Card.Title>
          <Card.Text>
            {details?.description}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <div className='text-center add-booking'>
      <h2>Add a Booking</h2>
      <p>Booking Price: {details?.cost}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder='user'/>
      <input defaultValue={user.email} {...register("email", { required: true})} placeholder='Email'/>
      <textarea {...register("address")} placeholder='Valid Address'/>
      <input type="number" {...register("phone")} placeholder='Valid Phone Number'/>
      
      <input className='bg-info' type="submit" value='Place the Booking' />
    </form>
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBooking;