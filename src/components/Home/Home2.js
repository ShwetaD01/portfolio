import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg  from "../../Assets/linkedin.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A passionate and detail-oriented software developer with one year of valuable experience 
            in the field.
            I have adeptly transitioned into this dynamic field, showcasing my proficiency 
            in an array of cutting-edge frontend technologies,including 
            <i>
                <b className="purple"> JavaScript, TypeScript, React, Node.js, and Express.js.  </b>
              </i>
           
      
              <br />
              <br />I'm excited to connect with like-minded professionals, collaborate on exciting projects, and keep pushing the boundaries of what's possible in the world of web development. 
              
              <br />
              <br />
              Let's connect and explore the endless possibilities of the digital landscape together!
      
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{borderRadius: "100%"}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shweta-819"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shwetadonode"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shweta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
