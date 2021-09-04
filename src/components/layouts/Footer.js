import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="py-5 footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <h2>Always here to help</h2>
          </Col>
          <Col xs={12} md={6}>
            <p>Support is just a few taps away. Get questions answered by using our help library</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="pt-3">
        <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="fs-6 fw-bold text-dark">Business</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Payments</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Billing</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Retail</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Pricing</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Exchange Rates</Nav.Link>
              <Nav.Link href="#" className="text-secondary">FAQ</Nav.Link>
            </Nav>
          </Col>  
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="fs-6 fw-bold text-dark">Personal</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Card</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Card FAQ</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Wallet</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Wallet FAQ</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Extention</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="fs-6 fw-bold text-dark">Developers</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Docs</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Insight</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Open Source</Nav.Link>
              <Nav.Link href="#" className="text-secondary">PGP Keys</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Integrations</Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} md={ 3 } lg={ 3 }>
            <Nav defaultActiveKey="/home" className="flex-column footer-nav">
              <Nav.Link href="/home" className="fs-6 fw-bold text-dark">Company</Nav.Link>
              <Nav.Link href="#" className="text-secondary">About</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Careers</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Merchant Directory</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Press</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Blog</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Stats</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Legal</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Privacy</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Manage Cookies</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Do Not Sell My Personal Information Under CCPA</Nav.Link>
              <Nav.Link href="#" className="text-secondary">Accessibility Statemant</Nav.Link>
            </Nav>
          </Col>    
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
