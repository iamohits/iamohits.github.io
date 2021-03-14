import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./banner.css"
import ParticlesBg from "particles-bg";
import Typical from 'react-typical';
import { Button } from '../button-elements';

const devname = [
    "{ IAMohit }", 2000,
    "IAMohit", 2000,
    "I A Mohit", 2000,
    "I Am Mohit", 5000,
    "I'm Mohit", 3000,
];
const subtitles = [
    "I'm a Software Engineer", 4500,
    "I'm a Software Developer", 3500,
    "I'm an Application Developer", 5500,
    "I'm an UI/UX Designer", 3000,
    "I'm a Coder / Programmer", 3500,
];
const Banner = () => {
    return (
        <section className="jumbotron jumbotron-fluid banner">
            <ParticlesBg type="lines" color="#000" num={1200} bg={true}></ParticlesBg>
            <Container className="banner-container">
                <Fade right duration={500} delay={250} >
                    <h1 className="hero-title" style={{ padding:40 }}>
                        <p>Hi!, <Typical steps={devname} wrapper="span" loop={Infinity} /></p>
                        <div>
                            <Typical steps={subtitles}
                                loop={Infinity}
                                wrapper="p" />
                        </div>
                    </h1>
                </Fade>
                <Fade left duration={500} delay={250}  >
                    <Button fontBig big primary>Hire Me</Button>
                </Fade>
            </Container>
        </section>
    );
};

export default Banner;
