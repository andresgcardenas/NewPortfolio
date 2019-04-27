import React, {Component} from 'react';
import myself from '../img/myself.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';

class Resume extends Component {
    render(){
        return(
            <div>
<Card border="secondary" className="cardd" style={{ width: '96%' }}>
                <Card.Body>
                <Container className="landing-Container">
                    <Row >
                    <Col sm={12}>
                    <Fade left>
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
                        <h1 className="intro">A little about me</h1>
                        </Fade>
                    </Col>
                    <Col sm={6}>
                    <Fade right>
                    <p className="description-bio1">Im a highly encouraged individual who loves to program</p>
                    <p className="description-bio">I want to be able to contribute to the world with the power of technology</p>
                    <p className="description-bio">Feel free to look around and find out more about me!</p>
                    </Fade>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12}>
                        <Fade bottom>
                        <h1 className="introskills">Skills</h1>
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
                    <p className="description-bio">CSS / css libraries</p>
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
                    <img src="https://img.icons8.com/color/96/000000/api-settings.png"/>
                    <p className="description-bio">JavaScript</p>
                    </Fade>
                    </Col>
                    </Row>
                </Container>
                </Card.Body>
                </Card>;
            </div>
        )
    }
}

export default Resume;