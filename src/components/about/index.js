import React from "react"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import "./about.css";
import { Col, Container, Row } from 'react-bootstrap';
import AboutMeImage from "../aboutme";


const About = () => {
    return (
        <section>
            <div className="aboutme">
                <Flip duration={900} delay={250}>
                    <h2 className="display-2">ABOUT ME</h2>
                </Flip>
                <Container>
                    <Row>
                        <Col md={3}>
                           <Slide right duration={1000} delay={500}>
                               <AboutMeImage />
                            </Slide>
                        </Col>
                        <Col md={9}>
                            <Fade left duration={1000} delay={500}>
                                <p>My name is Mohit Shrivastava, I create software. I am knowledgeable, logical and a observant professional with more than {new Date().getFullYear() - 2006} years of experience. I am an Indian Software Engineer / Computer Programmer / Software Developer / Coder, with a first-class Masters of Computer Application [MCA] degree from Sikkim Manipal University. Besides my specializations, I have an extreme passion of working with everything which involves development, automation and engineering. </p>
                                <p>I am proficient in Microsoft Technologies. I am also highly skilled in rendering solutions to problems, technical analysis, motivating teams and strategic planning. My experience includes working on Web and Windows based solutions. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of the organization.</p>
                                <p>Presently I am deputed as a senior engineer at IRIS Corp Berhad for the last one year. During these tenure, I have equipped myself with all functions of programming life cycle and laid my hands on every language and operating system used. I am having a strong background in computer-aided design, software development, and engineering, and believe that these skills would benefit to create a scalable solutions.</p>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About
