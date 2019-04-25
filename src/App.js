import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function App() {
  return (
      
<div style={{height: '2000px', width:'100%'}} className='header-color1'>
<Navbar bg="light" expand="lg" className='header-color'>
  <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
<Main/>
</div>
  );
}

export default App;
