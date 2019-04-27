import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Flippy,FrontSide, BackSide } from 'react-flippy';
import Bounce from 'react-reveal/Bounce';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFooter } from 'mdbreact';
class Projects extends Component {
    render(){
        return(
            <div>
<Card border="third" className="cardd" style={{ width: '96%',height:"900px" }}>
                <Card.Body>
                <Container className="landing-Container">
                <Row className="projectcard">
               <Col sm={12} className="proj">
               <Bounce top>
                <Flippy

                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="vertical"
                style={{ width: '100%', height: '200px',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }} // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                <h1>Avery Rice Foundation</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </Bounce>
            </Col>
                                        <Col sm={12} className="proj">
                                        <Bounce top>
                <Flippy

                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="vertical"
                style={{ width: '100%', height: '200px',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }} // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                <h1>Mongo Scraper</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </Bounce>
            </Col>
            <Col sm={12} className="proj">
            <Bounce top>
                <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="vertical" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '100%', height: '200px',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }} // horizontal or vertical
                 // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: '#41669d',
                }}
                >
                <h1>React command line portfolio</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#175852'}}>
                wasup
                </BackSide>
            </Flippy>
            </Bounce>
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

export default Projects;