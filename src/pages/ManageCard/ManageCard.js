import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageCard = (props) => {
  const {name, email, address, phone} = props.manage;
 const [manageBookings, setManageBookings] = useState([]);
 const {user} = useAuth();


 useEffect(() => {
  fetch("https://evil-broomstick-73449.herokuapp.com/bookings")
    .then((res) => res.json())
    .then((data) => setManageBookings(data));
}, []);


//DELETE an user
function handleDeleteUser(id) {
  const confirmation = window.confirm('Are you sure to delete !')
  if(confirmation) {
    fetch(`https://evil-broomstick-73449.herokuapp.com/delete/${id}`,{
    method: "delete",
  })
  .then(res=> res.json())
  .then(data => {
    if(data.deletedCount === 1){
      const remainingOrders = manageBookings.filter(manageBooking => manageBooking._id !== id)
      setManageBookings(remainingOrders)
    }else{
      alert("Something went worng");
    }
  })
  }
  
}
 

  return (
    <div>
       <Col>
      <Card className='bg-light text-center'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <p>{email}</p>
           <p>{address}</p>
           <p>{phone}</p> 
          </Card.Text>
        </Card.Body>
        <button className='w-25 mx-auto bg-info'>Confirm</button>
        <button onClick={()=>handleDeleteUser(user._id)} className='w-25 mx-auto mt-2 bg-info'>Delete</button>
      </Card>
    </Col>
    </div>
  );
};

export default ManageCard;