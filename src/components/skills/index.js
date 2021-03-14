import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { FaStackOverflow } from 'react-icons/fa';
// import { AiFillCaretUp } from 'react-icons/ai';
// import { DiJavascript1 } from 'react-icons/di';
//import Fade from 'react-reveal/Fade';
//import { Box, Typography } from '@material-ui/core';
import { SkillDiv } from "./skill";
import { Col, Container, Row } from "react-bootstrap";
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';

const SkillIcon = props => {
    const { iconName, size } = props;

    var icon = "";
    if (iconName.substring(0, 2) === "Di") {
        icon = React.createElement(DiIcons[iconName]);
    }
    else {
        icon = React.createElement(SiIcons[iconName]);
    }

    return (<div style={{ fontSize: size }}>{icon}</div>);
};


const Skills = () => {
    const sd = useStaticQuery(graphql`
    {
        allContentJson {
          edges {
            node {
              skillsData {
                alias
                icon
                name
              }
            }
          }
        }
      }
    `)

    return (
        <Container fluid >
            <Row>
                <Col className="text-center">
                    <h2 className="display-2">SKILLS</h2>
                </Col>
            </Row>
            <Row noGutters className="mt-5 justify-content-center" >
                {
                    sd.allContentJson.edges.map(({ node }, index) => {
                        if (node.skillsData !== null) {
                            return (
                                node.skillsData.map(({ name, icon, alias }, i) => {
                                    return (
                                        <Col xs={6} sm={4} md={3} lg={2} xl={1} key={i} style={{
                                            margin: 4
                                        }} >
                                            <SkillDiv className="text-center">
                                                <SkillIcon iconName={icon} size={48} />
                                                <div style={{
                                                    paddingBottom: 20,
                                                    paddingTop: 10,
                                                }} >{name}</div>
                                            </SkillDiv>
                                        </Col>
                                    )
                                })
                            )
                        }
                        else {
                            return ("");
                        }
                    })
                }

            </Row>
            <Row>
                <Col>
                    <p className="text-center small text-muted p-5" >The Technologies listed above are only with logos found. The Complete list of my Stacks can be found in my Projects Section</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills
