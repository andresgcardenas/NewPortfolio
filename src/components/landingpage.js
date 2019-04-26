import React, {Component} from 'react';
import myself from '../img/myself.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
class Landing extends Component {
    render(){
        return(
            <div>
                <Card border="secondary" className="cardd" style={{ width: '96%' }}>
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
                        <h1 className="intro">Hello, My name is Andres Cardenas</h1>
                    </Col>
                    <Col sm={6}>
                    <p className="description-bio1">Im a 20 year old full stack web developer learning more and more evry single day</p>
                    <p className="description-bio">I want to be able to contribute to the world with the power of technology</p>
                    <p className="description-bio">Feel free to look around and find out more about me!</p>
                    </Col>
                    </Row>

                </Container>
                </Card.Body>
                </Card>;
            </div>
        
        )
    }
}

export default Landing;