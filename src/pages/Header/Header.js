import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img width='60px' src={logo} alt="" /> <span className='fw-bold text-primary'>Tour Nature62</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link className='text-black fw-2' as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link className='text-black' as={NavLink} to="/blog">Blog</Nav.Link>
      <Nav.Link className='text-black' as={NavLink} to="/aboutus">About us</Nav.Link>
      
    </Nav>
    <Navbar/>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
    
    {
        user.displayName ? <span className='d-flex justify-content-center'>

<NavDropdown className='fw-bold text-dark me-3' title="Booking History">
          <Nav.Link className='text-black ' as={NavLink} to="/mybooking">My Booking</Nav.Link>
          <hr />
          <Nav.Link className='text-black' as={NavLink} to="/manageallbooking">Manage All Booking</Nav.Link>
          <hr />
          <Nav.Link className='text-black' as={NavLink} to="/addanewoption">Add A New Option</Nav.Link>
          </NavDropdown>

          <ul>
          <li className='d-flex justify-content-center'>

          
         </li>
         <div className='d-flex flex-column align-items-center'>
         <li className='list-style d-flex me-2'>
          <img className='img-fluid pe-1 ms-5' style={{width: '40px', borderRadius:'50%'}
          } src={user.photoURL} alt="" />
  
            <span style={{color:'black'}}>{user.displayName}</span>
          </li>
          


          <li className='list-style'>
          

            <span className='pe-2 fw-bold' style={{color:'red', cursor:'pointer'}} onClick={logOut}>Log Out</span>
          </li>
         </div>
          </ul>
          </span>
          
          
          
          : <ul className='d-flex'>
          <li className='list-style'>
            
            <span style={{color:'#fff'}}>{user.displayName}</span>
          </li>
          
          <Nav.Link as={NavLink} className='px-3 text-black' to="/login">Log In</Nav.Link>

      <Nav.Link as={NavLink} className='text-black' to="/signup">Sign Up</Nav.Link>
  
          </ul>
        
    }

  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;