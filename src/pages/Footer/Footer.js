import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import payment from '../../images/payment.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='bg-primary text-white mt-4 py-4'>
      <Row className='container'>
        <Col>
        <p>Bangladesh has been aptly described as a new state in an ancient land. Much has been written about the past glory of Bangladesh, notably in old records like the evidence of Pliny and Periplus of the Erythrean Sea (first century AD). It was drawn in Ptolemy's map.</p>
        <p>We are always waiting to help you</p>
        <p>Connected us via</p>
        <p><BsFacebook/> <BsTwitter/> <BsWhatsapp/></p>
        <p><CgMail/> www.tournature62@gmail.com</p>
        <p><FiPhoneCall/> 01888777888 <br /><FiPhoneCall/> 01333999666</p>
        </Col>
        <Col className='ms-5 d-flex'>
        <img src={payment} alt="" />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;