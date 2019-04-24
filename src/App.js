import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


function App() {
  return (
      
<div style={{height: '1000px', position: 'relative'}} className='header-color'>
<Navbar bg="light" expand="lg" className='header-color'>
  <Navbar.Brand href="#home">Porfoilio!</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">About Me</Nav.Link>
      <Nav.Link href="/">Portfolio</Nav.Link>
      <Nav.Link href="#link">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
<Main/>
</div>
  );
}

export default App;
