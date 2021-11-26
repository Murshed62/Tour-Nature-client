import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageCard from '../ManageCard/ManageCard';

const ManageAllBooking = () => {
const [manages, setManages] = useState([])

useEffect(()=>{
fetch('https://evil-broomstick-73449.herokuapp.com/bookings')
.then(res=>res.json())
.then(data =>setManages(data))
},[])


  return (
    <div>
        
     <Row xs={1} md={2} className="g-4">
  {
    manages?.map(manage => <ManageCard
      manage={manage}
    ></ManageCard>)
  }
</Row>
    </div>
  );
};

export default ManageAllBooking;