import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shweta Donode </span>
            {/* from <span className="purple"> , India.</span> */}
            <br />
            I am working as Associate Software Engineer at Cogoport, Mumbai.
            <br />
            I have completed post graduation from IIT Kharagpur in Chemical Engineering.
            <br/>
            As I continue to evolve in this dynamic field, I'm eager to contribute my expertise,
             passion, and commitment to projects that push boundaries and drive meaningful change.

            <br />
            <br />
            AREAS OF EXPERTISE 
          
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Responsive Web Design 
            </li>
            <li className="about-activity">
              <ImPointRight /> Frontend Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Page Optimization
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
