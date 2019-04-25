import React, {Component} from 'react';
import myself from '../img/myself.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

class Resume extends Component {
    render(){
        return(
            <div>
<Card border="secondary" className="cardd" style={{ width: '96%' }}>
                <Card.Body>
                <Container className="landing-Container">
                    <Row >
                    <Col sm={12}>
                    <img
                        src={myself}
                        alt='myself'
                        className='myself-img'/> 
                        <p/>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={6}>
                        <h1 className="intro">What do i do? And how can i help YOU?</h1>
                    </Col>
                    <Col sm={6}>
                    <p className="description-bio1">Im a highly encouraged individuals who loves to program</p>
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

export default Resume;