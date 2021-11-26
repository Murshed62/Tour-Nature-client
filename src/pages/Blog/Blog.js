import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog/blog-1.png";
import blog2 from "../../images/blog/blog-2.png";
import blog3 from "../../images/blog/blog-3.png";
import blog4 from "../../images/blog/blog-4.png";
import Fade from 'react-reveal/Fade';


const Blog = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Fade left>
          <img src={blog1} alt="" />
          </Fade>
        </Col>
        
        <Col>
        <Fade right>
        <h2 className="text-info">
          Bangladesh has an area of 148,393 sq km and occupies the apex of the arch formed by the Bay of Bengal into which all the rivers flowing through the country drain.
          </h2>
       
          <br />
          <p>
            <span>
            Bangladesh has one of the most complex river systems in the world numbering about 230 with their tributaries having a total length of about 24,140 km.
            </span>
          </p>
          <button className="bg-info border">Read More...</button>
        </Fade>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <Fade left>
          <h1 className="text-info">
          Bangladeshis are historically descendants of various races and nationalities.
          </h1>
          <br />
          <p>
            <span>
            Bangladesh contains greater biodiversity than that of many countries taken together. Indeed few countries in the world can match its rich and varied flora and fauna which are not only aunique biological phenomenon but are also a great natural resource of the country.
            </span>
          </p>
          <button className="bg-info border">Read More...</button>
          </Fade>
        </Col>
        <Col>
          <Fade right>
          <img src={blog2} alt="" />
          </Fade>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
         <Fade left>
         <img src={blog3} alt="" />
         </Fade>
        </Col>
        <Col>
          <Fade right>
          <h1 className="text-info">
          As per the census of 1991 Bangladesh has a population of 111.5 million with an average density of 755 people per sq. km. It is the second largest Muslim country.
          </h1>
          <br />
          <p>
            <span>
            Traditionally a land of communal harmony, followers of other religions enjoy full freedom of worship. The economy is mainly agrarian. Recently there is a spurt in industrialisation with the utilisation of country's available natural resources and manpower. Trade and commerce are increasing and widening. Bangladesh is a repository of rich cultural heritage and tradition.
            </span>
          </p>
          <button className="bg-info border">Read More...</button>
          </Fade>
        </Col>
      </Row>

      <Row>
        <Col>
         <Fade left>
         <img src={blog4} alt="" />
         </Fade>
        </Col>
        <Col>
          <Fade right>
          <h1 className="text-info">
          As per the census of 1991 Bangladesh has a population of 111.5 million with an average density of 755 people per sq. km. It is the second largest Muslim country.
          </h1>
          <br />
          <p>
            <span>
            Traditionally a land of communal harmony, followers of other religions enjoy full freedom of worship. The economy is mainly agrarian. Recently there is a spurt in industrialisation with the utilisation of country's available natural resources and manpower. Trade and commerce are increasing and widening. Bangladesh is a repository of rich cultural heritage and tradition.
            </span>
          </p>
          <button className="bg-info border">Read More...</button>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
