import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import webscraper  from "../../Assets/Projects/webscraping.png";
import Autocad  from "../../Assets/Projects/Autocad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce-Website"
              description="Well-structured layout with HTML ensures easy navigation for users.
              CSS styling enhances the visual appeal, providing a professional and engaging appearance.
              JavaScript adds interactivity and functionality to the website.
              Seamless product browsing, selection, and checkout process for a smooth user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Autocad}
              isBlog={false}
              title="Student Management System"
              description="The Student Management System is a comprehensive and efficient web-based application designed to streamline the management of student-related activities within an educational institution. This system incorporates a range of technologies, including Hibernate, JSP, Spring MVC, Core Java, MySQL, and CSS, to provide a robust and user-friendly platform for administrators, teachers, and students."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Car Dekho"
              description="The project is a backend application designed to manage car-related data, such as car models, specifications, and other related information.
              Backend Framework: Hibernate, which is an Object-Relational Mapping (ORM) framework.
              Database: MySQL, a relational database management system.
              "
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col> */}

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
