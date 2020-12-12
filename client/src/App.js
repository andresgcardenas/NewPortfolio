import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pdf from './img/resume.pdf';

function App() {
  return (
      
<div style={{height: '100%', width:'100%'}} className='header-color1'>
<Navbar fixed="top" bg="light" expand="lg" className='header-color'>
  <Navbar.Brand href="/"><h3 className="nav-text1"><img src="https://img.icons8.com/bubbles/50/000000/workstation.png"/>Welcome</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><h6 className="nav-text">Home</h6></Nav.Link>
      <Nav.Link href="/aboutme"><h6 className="nav-text">About Me</h6></Nav.Link>
      <Nav.Link href="/projects"><h6 className="nav-text">Projects</h6></Nav.Link>
      {/* <Nav.Link  href={pdf} target="_blank"><h6 className="nav-text">Resume</h6></Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>;
<Main/>
</div>
  );
}

export default App;
