import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './assets/style.css';

const NavbarComponent = () => {
  return (
    <Navbar className="navbarEC d-flex" expand="lg" fixed='top'>
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} className='navItem' to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} className='navItem' to="/about">Acerca de</Nav.Link>
          <Nav.Link as={Link} className='navItem' to="/contact">Contacto</Nav.Link>
          <Nav.Link
            className='navItem'
            href="https://equipocalido.tiendup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuestra Tienda
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link 
            as={Link} 
            to="/register"
            className='navItem auth-link'
          >
            Registrarse
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/login"
            className='navItem auth-link'
          >
            Iniciar Sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;