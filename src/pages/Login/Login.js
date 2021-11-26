import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Login.css';
import '../Signup/Signup.css';
import loginsvg1 from '../../images/loginsvg/undraw_mobile_login_re_9ntv.svg';
import loginsvg2 from '../../images/loginsvg/undraw_secure_login_pdn4.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../hooks/useAuth';
import Fade from 'react-reveal/Fade';


const Login = () => {
  const {error, handleEmail, handlePassword, handleGoogleSingIn, handleGithubSingIn, handleFacebookSingIn, handleEmailSingIn, setUser, setError, setIsLoading} = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState();
  const redirect = location?.state?.from;

  return (
    <Container>
      <Row>
      <Col>
        <Fade left>
        <img width='450px' className='img-fluid' src={loginsvg1} alt="" />
        </Fade>
        </Col>
        <Col>
        <div className= 'container login-form'>
    <Fade top>
    <form className='d-grid justify-content-md-center'>
        <h2>Please <span className='text-info'>Login</span></h2>
        <span className='text-danger'>{errorMessage}</span>
        <input onBlur={handleEmail} type="email" placeholder='Enter email'/>
        <br />
        <input onBlur={handlePassword} type="password" placeholder='Enter password'/>
        <br />
        <span className='text-danger'>{error}</span>
        <br />
        <p>New in this Site? Please <Link className='register-link' to='/signup'>Sign Up</Link></p>
    </form>
    </Fade>
    <button onClick={() =>{
      handleEmailSingIn()
      .then((userCredential) => {
history.push(redirect)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
      })
      .finally(() => setIsLoading(false));
      setErrorMessage("");
    }} className='btn-regular btn-login mb-2 bg-info'>Login</button>
    <br />
    <div className= 'signIn-btn-custom '>
        
   {/* Google signIn btn */}

    <button onClick={() => {
      handleGoogleSingIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        history.push(redirect)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
    }} className='singInBtn m-1 bg-primary fw-bold'>Google <FcGoogle/></button>
        
        {/* Github signIn btn */}
        
        <button onClick={()=>{
          handleGithubSingIn()
          .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(redirect)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(() => setIsLoading(false));
        }} className='singInBtn m-1 bg-primary fw-bold'>Github <BsGithub/> </button>

{/* Facebook signIn btn */}

        <button onClick={()=>{
          handleFacebookSingIn()
          .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(redirect)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(() => setIsLoading(false));
        }} className='singInBtn m-1 bg-primary fw-bold'>Facebook <BsFacebook/> </button>
        <br /><br /><br />
        
    </div>
</div>
        </Col>
        <Col>
        <Fade right>
        <img width='450px' className='img-fluid' src={loginsvg2} alt="" />
        </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;