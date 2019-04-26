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
                        <h1 className="intro">What do i do?</h1>
                        </Fade>
                    </Col>
                    <Col sm={6}>
                    <Fade right>
                    <p className="description-bio1">Im a highly encouraged individuals who loves to program</p>
                    <p className="description-bio">I want to be able to contribute to the world with the power of technology</p>
                    <p className="description-bio">Feel free to look around and find out more about me!</p>
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