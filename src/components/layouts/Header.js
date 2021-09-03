import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';
import image from "../images/logo.PNG"
import { CartFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="py-2 shadow-sm" expand="lg">
        <Container>
        <Navbar.Brand href="/" className="fs-2 nav-bar-text text-primary"> 
          <img src={image} style={{ width: '50px' }} alt="Brand Logo" /> Verdant Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="fs-7 fw-bold mr-3 text-dark color">How It Works</Nav.Link>
            <Nav.Link href="#link" className="fs-7 fw-bold mr-3 text-dark ">About Us</Nav.Link>
            <NavDropdown className="fs-7 fw-bold mr-3 text-dark color" title="Products" id="basic-nav-dropdown">
              <LinkContainer to="/products/groceries">           
                <NavDropdown.Item className="fs-7 text-dark navlink">Product 1</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#" className="fs-7 text-dark">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-7 text-dark">Product 3</NavDropdown.Item>
              <NavDropdown.Item href="#" className="fs-7 text-dark">Product 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="fs-7 fw-bold mr-3 text-dark color" title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="fs-7 text-dark navlink">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="fs-7 text-dark">Another action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="fs-7 fw-bold mr-3 text-dark">
              Cart  
              <CartFill className="ml-2" size={25} />
            </Nav.Link>

            <DropdownButton id="dropdown-basic-button" title="Account" className="ms-4 dropdown-btn">
              <Dropdown.Item href="#/action-1" className="fs-7 text-dark navlink">Login</Dropdown.Item>
              <Dropdown.Item href="#" className="fs-7 text-dark navlink">Sign Up</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}

export default Header
