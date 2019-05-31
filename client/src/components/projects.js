import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Flippy,FrontSide, BackSide } from 'react-flippy';
import myself from '../img/myself.jpg';
import paper from '../img/paper.jpeg';
import slt from '../img/SLT.JPG';
import chat from '../img/chat.png';
import Avery from '../img/avlogo.png';
import cmd from '../img/cmd.jpg';
import Crypto from '../img/crypto.png'
import Bounce from 'react-reveal/Bounce';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFooter } from 'mdbreact';
class Projects extends Component {
    render(){
        return(
            <div>
<Card border="third" className="cardd" style={{ width: '96%',height:"100%" }}>
                <Card.Body>
                <Container className="landing-Container">
                <Row>
                <Col sm={12}>
                <Fade top>
                <h1 className='intro4'>Recent Projects</h1>
                </Fade>
                </Col>
                </Row>
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
                     backgroundImage: `url(${Avery})`,display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" 
                }}
                >
                <h1 className="intro">Avery Rice Foundation</h1>
                </FrontSide>
                <BackSide
                style={{backgroundColor: '#41669d', backgroundSize:'cover',backgroundISize:'contain',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                <p className="description-bio">A fundraising application built for a lost friends mother that is building a skatepark after him.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="http://averyricefoundation.com/" className='buttons' variant="secondary">Live Project</Button>
                <Button target="_blank" href="https://github.com/averyricefoundation/-AveryBuilt" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
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
                     backgroundImage: `url(${chat})`,display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" 
                }}
                >
                <h1 className="intro">Code talk</h1>
                </FrontSide>
                <BackSide
                style={{backgroundColor: '#41669d', backgroundSize:'cover',backgroundISize:'contain',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                <p className="description-bio">A React and firebase application made for developers to connect and chat.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://react-code-talk.firebaseapp.com/" className='buttons' variant="secondary">Live Project</Button>
                <Button target="_blank" href="https://github.com/Yungcode34/Code-Talk" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
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
                     backgroundImage: `url(${Crypto})`,display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" 
                }}
                >
                <h1 className="intro">Crypto dash</h1>
                </FrontSide>
                <BackSide
                style={{backgroundColor: '#41669d', backgroundSize:'cover',backgroundISize:'contain',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                <p className="description-bio">A React application to watch and view cryptocurrency market movement, created for data visualization purposes.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://cryptocurrency-dash.herokuapp.com/" className='buttons' variant="secondary">Live Project</Button>
            
                </ButtonGroup>
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
                    backgroundImage: `url(${cmd})`
                }}
                >
                <h1 className="intro3">Command Line Portfolio</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                    <p className="description-bio">A React portfolio made on a 90s retro theme.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://portfolio-ac123.herokuapp.com/" className='buttons' variant="secondary">Live Project</Button>
                <Button target="_blank" href="https://github.com/Yungcode34/Portfolio" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
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
                    backgroundImage: `url(${paper})`,display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" 
                }}
                >
                <h1 className="intro2">News Scraper</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                    <p className="description-bio">A React application that scrapes daily news and lets you save and comment on them.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://glacial-oasis-46115.herokuapp.com/" className='buttons' variant="secondary">Live Project</Button>
                <Button target="_blank" href="https://github.com/averyricefoundation/-AveryBuilt" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
                </BackSide>
            </Flippy>
            </Bounce>
            </Col>
            </Row>
                    <Row>
                <Col sm={12}>
                <Fade top>
                <h1 className='intro4'>Upcoming Projects</h1>
                </Fade>
                </Col>
                </Row>
                <Row className="projectcard">
                <Col sm={12} className="proj">
                <Bounce>
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
                     backgroundImage: `url(${slt})`,display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" 
                }}
                >
                <h1 className="intro5">SLT WEBSITE</h1>
                </FrontSide>
                <BackSide
                style={{backgroundColor: '#41669d', backgroundSize:'cover',backgroundISize:'contain',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                <p className="description-bio">A local brand made by the homies and i , we're going to be selling art clothing, aswell as having a far end site with a blog, shop, gellery and much more</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://github.com/Yungcode34/SLT" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
                </BackSide>
                </Flippy>
                </Bounce>
                </Col>
                <Col sm={12} className="proj">
                <Bounce bottom>
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
                    backgroundImage: `url(${Crypto})`
                }}
                >
                <h1 className="intro2">Node blockchain technology</h1>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#41669d',display:"flex", textAlign:"center", justifyContent: "center", flexDirection:"column" }}>
                                <p className="description-bio">A node blockchain that is "cryptocurrency" technology.</p>
                <ButtonGroup aria-label="Basic example">
                <Button target="_blank" href="https://github.com/Yungcode34/node-blockchain" className='buttonss' variant="secondary">Github</Button>
                </ButtonGroup>
                </BackSide>
            </Flippy>
            </Bounce>
            </Col>
            </Row>
            <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <h1 className="introskills">Even more projects on the way!</h1>
                        </Fade>
                    </Col>
                    <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <p className="description-bio">I currently have started a challange with myself to complete a 100 days of coding. You can follow my journey as i post every day.I am creating various full stack applications, aswell as learning new things, and connecting with new people. Feel free to either check out my instagram and linked in where im hosting all of this content and more! Also feel free to checkout my github, there links below!</p>
                        </Fade>
                    </Col>
                    </Row>
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