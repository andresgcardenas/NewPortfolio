import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import myself from '../img/myself.jpg'
class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <p className="gap"/>
                    <img
                        src={myself}
                        alt='myself'
                        className='myself-img'/> 
                        <p/>
                    <div>
                        <h1 className="landing-intro">Hello! My names Andres Cardenas.</h1>
                        <h4 className="landing-intro" >
                        Ive grown a passion for web developement,
                        i continue to expand my knowledge and become
                        the best programmer i can be.
                        
                        </h4>
                    </div>        
                    <p className="gap"/>
                    <div className='banner-text'>
                        <h1>Full Stack Web Devloper</h1>
                        <hr/>


                        <p>JavaScript | React | NodeJS | MongoDB | Express.js | Html/Css | PHP</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/andres-cardenas-03860a158" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"/>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/Yungcode34" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github-square" aria-hidden="true"/>
                            </a>
                            {/* Instagram */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true"/>
                            </a>

                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;