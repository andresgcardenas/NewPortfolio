import React, {Component} from 'react';
import myself from '../img/myself.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFooter } from 'mdbreact';
import axios from 'axios'
class Resume extends Component {
    constructor(){
        super()

        this.state= {
            name: '',
            email: '',
            subject: '',
            message: ''

        }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value })
    }

    async handleSubmit(e){
        e.preventDefault();

        const {name, email, subject, message} = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            subject,
            message
        })
    }

    render(){
        return(
            <div>
<Card border="third" className="cardd" style={{ width: '96%' }}>
                <Card.Body>
                <Container className="landing-Container">
                    <Row >
                    <Col sm={12}>
                    <Fade top>
                    <img
                        src={myself}
                        alt='myself'
                        className='myself-img'/> 
                        <p/>
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={6}>
                        <Fade left>
                        <h1 className="intro">A little more about me</h1>
                        </Fade>
                    </Col>
                    <Col sm={6}>
                    <Fade right>
                    <p className="description-bio1">Im a highly encouraged individual who loves to program.</p>
                    <p className="description-bio">I want to be able to contribute to the world with the power of technology.</p>
                    <p className="description-bio">My goal is to earn experience in web development as i expand my knowledge in Software Devlopment overall.</p>
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12} className="photo1">
                    <Fade bottom>
                    <Image src="https://cdn-images-1.medium.com/max/2600/0*HICLyAdNSIyT0ODU.jpg" thumbnail />
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <h1 className="introskills">What do i offer?</h1>
                        </Fade>
                    </Col>
                    <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <p className="description-bio">Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Backend web development. Experienced in building CRUD applications, RESTful APIs using Node.js and express, User Auth and oAuth with PassportJS and JWT. Also have React VR expirience, React redux, and light React Native. Expirience building small application in vue.js. Common libraries of use: Axios, Redux, Mongoose, Lodash, Express, body-parser, socket.io, react-router. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI. I also have expirience with  C++.</p>
                        </Fade>
                    </Col>
                    </Row>
                    </Row>
                    <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <h1 className="introskills">Top Skills</h1>
                        </Fade>
                    </Col>
                    </Row>
                    <Row className="icons">
                    <Col sm={3}>
                        <Fade bottom>
                        <img src="https://img.icons8.com/color/96/000000/javascript.png"/>
                        <p className="description-bio">JavaScript</p>
                        </Fade>
                    </Col>
                    <Col sm={3}>
                    <Fade bottom>
                    <img src="https://img.icons8.com/ios/100/000000/react-native.png" style={{height:'96px'}}/>
                    <p className="description-bio">React</p>
                    </Fade>
                    </Col>
                    <Col sm={3}>
                        <Fade bottom>
                        <img src="https://img.icons8.com/color/96/000000/nodejs.png"/>
                        <p className="description-bio">Node.js</p>
                        </Fade>
                    </Col>
                    <Col sm={3}>
                    <Fade bottom>
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png"/>
                    <p className="description-bio">Mongo DB</p>
                    </Fade>
                    </Col>
                    </Row>
                    <Row className="icons">
                    <Col sm={3}>
                        <Fade bottom>
                        <img src="https://img.icons8.com/color/96/000000/html-5.png"/>
                        <p className="description-bio">HTML 5</p>
                        </Fade>
                    </Col>
                    <Col sm={3}>
                    <Fade bottom>
                    <img src="https://img.icons8.com/color/96/000000/css3.png"/>
                    <p className="description-bio">CSS</p>
                    </Fade>
                    </Col>
                    <Col sm={3}>
                    <Fade bottom>
                    <img src="https://img.icons8.com/color/96/000000/api-settings.png"/>
                    <p className="description-bio">REST / API development</p>
                    </Fade>
                    </Col>
                    <Col sm={3}>
                    <Fade bottom>
                    <img src="https://img.icons8.com/color/96/000000/mysql.png"/>
                    <p className="description-bio">Mysql / SQL</p>
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="grey-text">
                                <MDBInput
                                    name="name"
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="email"
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="subject"
                                    label="Subject"
                                    icon="tag"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="message"
                                    type="textarea"
                                    rows="2"
                                    label="Your message"
                                    icon="pencil-alt"
                                    onChange={this.handleChange}
                                />
                                </div>
                                <div className="text-center">
                                <button>Submit</button>
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
                <MDBFooter className="font-small pt-12 mt-">
                <MDBContainer >
                      <Row className="footer">
                        <Col className="logos">
                        <Fade bottom>
                        <a  href="https://www.instagram.com/yungcode34/" target="_blank">
                        <img href="instragram.com" src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos">
                        <Fade bottom>
                        <a href="https://github.com/Yungcode34" target="_blank">
                        <img src="https://img.icons8.com/nolan/48/000000/github.png"/>
                        </a>
                        </Fade>
                        </Col>
                        <Col className="logos"> 
                        <Fade bottom>
                        <a href="https://www.linkedin.com/in/andres-cardenas-03860a158/" target="_blank">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
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

export default Resume;