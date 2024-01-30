import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitighya Nimbellu </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am highly enthusiastic as a Software Developer .
            <br />
            I have done a FullStack Development Course where i have mastered Java and React.Js
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Gym
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do What You Want!"{" "}
          </p>
          <footer className="blockquote-footer">Nitighya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
