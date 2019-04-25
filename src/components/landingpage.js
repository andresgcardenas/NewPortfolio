import React, {Component} from 'react';
import myself from '../img/myself.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Landing extends Component {
    render(){
        return(
            <div>
                <Container className="landing-Container">
                    <Row>
                    <Col sm={12}>
                    <p className="gap"/>
                    <img
                        src={myself}
                        alt='myself'
                        className='myself-img'/> 
                        <p/>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={6}>
                        <h1>Hello! My name is Andres Cardenas</h1>
                    </Col>
                    <Col sm={6}>
                    <p className="description-bio">im a 20 year old full stack web developer</p>
                    <p className="description-bio">specializing in javascript with various skills and</p>
                    <p className="description-bio">expirience with different technologies</p>
                    </Col>
                    </Row>
                </Container>
            </div>
        
        )
    }
}

export default Landing;