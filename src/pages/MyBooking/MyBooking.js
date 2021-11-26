import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyCard from '../MyCard/MyCard';
import './MyBooking.css';

const MyBooking = () => {
const [bookingDetails, setBookingDetails] = useState([]);
const {user} = useAuth();
const {email} = user;

useEffect(()=>{
  fetch(`https://evil-broomstick-73449.herokuapp.com/bookings/${email}`)
  .then(res => res.json())
  .then(result => setBookingDetails(result))
  
},[email]);
// console.log(bookingDetails);
  return (
    <div className='text-center pt-3'>
     
     <Row xs={1} md={2} className="g-4">
  {
    bookingDetails.map(singleDetail => <MyCard
      singleDetail={singleDetail}
    ></MyCard>)
  }
</Row>

    </div>
  );
};

export default MyBooking;