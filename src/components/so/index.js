import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Helmet } from "react-helmet";
import { FaStackOverflow } from 'react-icons/fa';
import { AiFillCaretUp } from 'react-icons/ai';
import moment from 'moment';
import Fade from 'react-reveal/Fade';
import { Box, Typography } from '@material-ui/core';
import "./so.css";
import { CardColumns, Card, Col, Container, Row } from "react-bootstrap";
import Prism from 'prismjs';


const SO = ({ postSize }) => {
    const data = useStaticQuery(graphql`
    {
        allContentJson(filter: {items: {elemMatch: {answer_id: {gt: 1}}}}) {
          edges {
            node {
              items {
                answer_id
                body
                comment_count
                creation_date
                is_accepted
                link
                question_id
                score
                share_link
                title
                up_vote_count
              }
            }
          }
        }
      }
  `)
    var allcontent = data.allContentJson?.edges[0]?.node?.items;
    allcontent = postSize <= 0 ? allcontent : allcontent.slice(0, postSize);
    useEffect(() => {
        setTimeout(() => {
            Prism.highlightAll();
        });
    });

    return (
        <Container fluid className="bg-dark">
            <Row>
                <Col className="text-center">
                    <h2 className="display-2"><FaStackOverflow size={75} style={{ marginTop:-20 }} />STACKOVERFLOW</h2>
                </Col>
            </Row>
            {/* <Row md={2} noGutters={false}> */}
            <CardColumns>
                {
                    allcontent.map(({ answer_id, body, comment_count, creation_date, is_accepted, link, question_id, score, share_link, title, up_vote_count }, index) => {
                        if (!body.includes("imgur") && body.length < 3500) {
                            return (
                                <Card key={answer_id} style={{
                                    borderColor: is_accepted ? "#20d18b" : "#f5f543",
                                    marginBottom: 10
                                }}>
                                    <Card.Header style={{
                                        background: is_accepted ? "#20d18b" : "#f5f543",
                                    }}>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <span className="display-score" title={"Upvoted " + up_vote_count + " times"} >
                                                        <h3 style={{
                                                            position: "absolute",
                                                            zIndex: 1,
                                                            top: 3,
                                                            left: 29,
                                                        }} >{score}</h3>
                                                        <AiFillCaretUp fontSize="3.5em" color="orangered" />
                                                    </span>

                                                </Col>
                                                <Col style={{
                                                    textAlign: `right`
                                                }}>
                                                    <span className="comment-count" title={comment_count <= 0 ? 0 : comment_count + " expert comment/s"}>{comment_count > 0 ? comment_count : 0}</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Header>
                                    <Fade right>
                                        <Card.Body style={{
                                            overflow: `hidden`
                                        }}>
                                            <Card.Title>
                                                <a href={link}>
                                                    <Box>
                                                        <Typography variant="h5" component="h5" dangerouslySetInnerHTML={{ __html: title }} />
                                                    </Box>
                                                </a>
                                            </Card.Title>
                                            <hr />
                                            <Box>
                                                <Typography component="div" className="language-javascript" dangerouslySetInnerHTML={{ __html: body }} />
                                            </Box>
                                        </Card.Body>
                                    </Fade>
                                    <Card.Footer className="text-muted" style={{
                                        textAlign: `right`,
                                        backgroundColor: `#cccccc`
                                    }}>
                                        Answered on {moment.unix(creation_date).format("DD-MMM-YYYY")}
                                    </Card.Footer>
                                </Card>
                                // </Col>
                            )
                        }
                        else {
                            return ("")
                        }
                    })}
            </CardColumns>
            {/* </Row> */}
        </Container>
    );
}

export default SO
