import React, {Component} from 'react';
import myself from '../img/myself2.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Image from 'react-bootstrap/Image'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFooter } from 'mdbreact';
class Landing extends Component {
    render(){
        return(
            <div>
                <Card border="third" className="cardd" style={{ width: '96%' }}>
                <Card.Body>
                <Container className="landing-Container">
                    <Row >
                    <Col sm={12}>
                    <Fade top>
                    <Image  className="img2" src={myself} roundedCircle />
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={6}>
                        <Fade top>
                        <h1 className="intro">Hello, My name is Andres Cardenas</h1>
                        </Fade>
                    </Col>
                    <Col sm={6}>
                    <Fade top>
                    <p className="description-bio1">Im a 20 year old full stack web developer learning more and more evry single day</p>
                    <p className="description-bio">I want to be able to contribute to the world with the power of technology</p>
                    <p className="description-bio">Feel free to look around and find out more about me!</p>
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                        <Col className="logos">
                        <Fade bottom>
                        <a  href="https://www.instagram.com/yungcode34/" target="_blank">
                        <img href="instragram.com" src="https://img.icons8.com/color/96/000000/instagram-new.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos">
                        <Fade bottom>
                        <a href="https://github.com/Yungcode34" target="_blank">
                        <img src="https://img.icons8.com/nolan/96/000000/github.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos"> 
                        <Fade bottom>
                        <a href="https://www.linkedin.com/in/andres-cardenas-03860a158/" target="_blank">
                        <img src="https://img.icons8.com/color/96/000000/linkedin.png"/>
                        </a>
                        </Fade>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={6}>
                    <Fade bottom>
                    
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                        <Card.Body>
                        <Card.Text>
                            Feel free to contact me if you are in need of services! Also if you want to collaborate and build together!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                      
                    </Fade>
                    </Col>
                    <Col sm={6}>
                    <Fade bottom>
                        <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                            <form>
                                <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Subject"
                                    icon="tag"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    type="textarea"
                                    rows="2"
                                    label="Your message"
                                    icon="pencil-alt"
                                />
                                </div>
                                <div className="text-center">
                                <MDBBtn outline color="secondary">
                                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                                </div>
                            </form>
                            </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                        </Fade>
                    </Col>
                    </Row>
                </Container>
                </Card.Body>
                </Card>;
                <MDBFooter >
                <MDBContainer >
                  
                      <Row className="footer">
                        <Col className="logos">
                        <Fade bottom>
                        <a  href="https://www.instagram.com/yungcode34/" target="_blank">
                        <img href="instragram.com" src="https://img.icons8.com/material/48/000000/instagram-new.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos">
                        <Fade bottom>
                        <a href="https://github.com/Yungcode34" target="_blank">
                        <img src="https://img.icons8.com/material/48/000000/github.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos"> 
                        <Fade bottom>
                        <a href="https://www.linkedin.com/in/andres-cardenas-03860a158/" target="_blank">
                        <img src="https://img.icons8.com/android/48/000000/linkedin.png"/>
                        </a>
                        </Fade>
                        </Col>
                    </Row>
                 
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> Andres Cardenas </a>
                  </MDBContainer>
                </div>
              </MDBFooter>
            </div>
        
        )
    }
}

export default Landing;