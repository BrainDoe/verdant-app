import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown, DropdownButton, Image } from 'react-bootstrap';
import image from "../images/logo.PNG"
import { CartFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="py-2 shadow-sm" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="text-primary"> 
              <Image src={image} style={{ width: '50px' }} alt="Brand Logo" /> <span style={{ fontSize: '21.43px', fontWeight: '700' }}> Verdant Digital</span>
            </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="mr-3 text-dark color"  style={{ fontSize: '18px', fontWeight: '400' }}>How It Works</Nav.Link>
            <Nav.Link href="#link" className="mr-3 text-dark" style={{ fontSize: '18px', fontWeight: '400' }}>About Us</Nav.Link>
            <NavDropdown className="mr-3 text-dark color" title="Products" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '400' }}>
              <LinkContainer to="/products/groceries"  style={{ fontSize: '12px', fontWeight: '400' }}>           
                <NavDropdown.Item className="text-dark navlink">Groceries</NavDropdown.Item>
                </LinkContainer>
                {/* Bill Payment Link */}
                 <LinkContainer to="/products/billPayment" style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Bills Payment
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/invoiceUpload"  style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Invoice Upload
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/checkout" style={{ fontSize: '12px', fontWeight: '400' }}>           
                  <NavDropdown.Item className="text-dark navlink text-primary">
                    Checkout
                  </NavDropdown.Item>
                </LinkContainer>

            </NavDropdown>
            <NavDropdown className="mr-3 text-dark color" title="Help" id="basic-nav-dropdown" style={{ fontSize: '18px', fontWeight: '400' }}>
              <NavDropdown.Item href="#" className="text-dark navlink"  style={{ fontSize: '12px', fontWeight: '400' }}>FAQ1</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-dark navlink"  style={{ fontSize: '12px', fontWeight: '400' }}>FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-dark"   style={{ fontSize: '12px', fontWeight: '400' }}>Another action</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/products/cart">
              {/*  style={{ fontSize: '12px', fontWeight: '400' }} */}
              <Nav.Link className="mr-3 text-dark" style={{ fontSize: '18px', fontWeight: '400' }}>
                Cart  
                <CartFill className="ml-2" size={20} style={{ fontSize: '7px', fontWeight: '500' }} />
              </Nav.Link>
            </LinkContainer>

            <DropdownButton id="dropdown-basic-button" title="Account" className="ms-4 dropdown-btn" style={{ fontSize: '18px', fontWeight: '500' }}>
              <Dropdown.Item href="#" className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Login</Dropdown.Item>
              <Dropdown.Item href="#" className="text-dark navlink" style={{ fontSize: '12px', fontWeight: '400' }}>Sign Up</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}

export default Header
