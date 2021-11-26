import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import '../Login/Login.css';
import './Signup.css';
import signupsvg1 from '../../images/signupsvg/undraw_access_account_re_8spm.svg';
import signupsvg2 from '../../images/signupsvg/undraw_sign_in_re_o58h.svg';
import { useHistory, useLocation } from "react-router";
import { updateProfile } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Signup = () => {
  const {error, handleName, handleEmail, handlePassword, handleGoogleSingIn, handleGithubSingIn, handleFacebookSingIn, handleCreateEmail, auth, name, setIsLoading, setUser, setError} = useAuth();

  const history = useHistory();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState();
  const redirect = location?.state?.from;

  return (
    <Container>
      <Row>
      <Col>
        <Fade left>
        <img width='450px' className='img-fluid' src={signupsvg1} alt="" />
        </Fade>
        </Col>
      <Col>
      <div className="container login-form">
      <Fade>
      <form className="d-grid justify-content-md-center">
        <h2>
          Please <span className="text-info">Sign Up</span>
        </h2>
        <input onBlur={handleName} type="text" placeholder="Enter your full name" />
        <br />
        <input onBlur={handleEmail} type="email" placeholder="Enter your email" />
        <br />
        <input onBlur={handlePassword} type="password" placeholder="Enter your password" />
        
        <br />
        <input type="password" placeholder="Re-Enter your password" />
        <span className='text-danger'>{error}</span>
        <br />
        <p>
          Already have an Account? Please <Link className="login-link" to="/login">
           Login
          </Link>
        </p>
      </form>
      </Fade>
        <button onClick={() =>{
          handleCreateEmail()
          .then((userCredential) => {
            history.replace('/home')
            window.location.reload()
            console.log(userCredential);           
            updateProfile(auth.currentUser, {
              displayName: name
              
            }).then(() => {            
              // setUser(auth.currentUser)
            }).catch((error) => {
              const errorMessage = error.message;
           
            });
          })
          .finally(() => setIsLoading(false));
          setErrorMessage("");
        }} className="btn-regular btn-register mb-2 bg-info">Sign Up</button>
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
            </div>
       </div>
      </Col>
      <Col>
        <Fade right>
        <img width='450px' className='img-fluid' src={signupsvg2} alt="" />
        </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;