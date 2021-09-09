import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="py-5 footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h2 className="footer-title">Always here to help</h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="footer-text">Support is just a few taps away. Get questions answered by using our help library</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="pt-3">
        <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Business</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Payments</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Billing</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Retail</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Pricing</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Exchange Rates</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">FAQ</Nav.Link>
            </Nav>
          </Col>  
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className=" text-dark" style={{ fontWeight:'bold'}}>Personal</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Card</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Card FAQ</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Wallet</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Wallet FAQ</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Extention</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Developers</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Docs</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Insight</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Open Source</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">PGP Keys</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Integrations</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight:'bold'}}>Company</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">About</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Careers</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Merchant Directory</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Press</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Blog</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Stats</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Legal</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Privacy</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Manage Cookies</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Do Not Sell My Personal Information Under CCPA</Nav.Link>
              <Nav.Link href="#" className="text-secondary navLink">Accessibility Statemant</Nav.Link>
            </Nav>
          </Col>    
        </Row>
      </Container>
    </footer>
  )
}


export default Footer
