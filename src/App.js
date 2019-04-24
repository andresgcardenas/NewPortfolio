import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div style={{height: '1000px', position: 'relative'}} className='header-color'>
    <Layout fixedHeader>
        <Header className='header-color' title='Titile'>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation >
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Main/>
        <Content />
    </Layout>
</div>
  );
}

export default App;
