import React from 'react'
import { Card, Col, Row, Form, Image } from 'react-bootstrap';
import { Archive, Heart, Record2 } from 'react-bootstrap-icons';
import Crypto from '../../images/bill-image/cryto.png';
import CardMaster from '../../images/bill-image/card-master.png';
import CardCheckout from './CardCheckout';
import CryptoCheckout from './CryptoCheckout';

const Checkout = () => {
  return (
    <section className="py-5">
      <Row className="py-3">
        <Col sm={12} md={12} lg={12}>
          <h5 style={{ fontSize: '18px', fontWeight: '500' }}>CHECKOUT</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card className="p-3">
            <h5 className="card-header bg-white px-0" style={{ fontSize: '24px', fontWeight: '500' }}>Step 1: Enter Reciever’s Details</h5>
            <Form>
           <Row  className=" py-2">
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Fullname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" >
                  <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Phone Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" bg="secondary" />
                </Form.Group>
              </Col>
              </Row>
              <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Address <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>Town / City  <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Town / City" />
                  </Form.Group>
                </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '18px', fontWeight: '400' }}>State <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter State" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="mt-5">
                  <h5 className="card-header bg-white px-0" style={{ fontSize: '24px', fontWeight: '500' }}>Step 2: Choose Delivery Method</h5>
                  <div>
                    <h6 className="pt-3">
                      <Record2 size={23} className="text-primary" />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Door Delivery</span>
                    </h6>
                    <p style={{ fontSize: '16px', fontWeight: '700', color: '#181818', lineHeight: '21.52px', marginLeft: '3.5px' }}>Delivered between Monday 13 Sep and Wednesday 15 Sep for ₦ 1,000</p>
                  </div>
                  <div>
                    <h6 className="pt-3">
                      <Record2 size={23} />
                      <span style={{ fontSize: '18px', fontWeight: '400' }}>Pickup Centre</span>
                    </h6>
                    <p style={{ fontSize: '16px', fontWeight: '400',  color: '#181818', lineHeight: '21.52px', marginLeft: '3.5px' }}>Ready for pickup between Wednesday 8 Sep to Thursday 9 Sep with cheaper shipping fees</p>
                  </div>
                  <h6 className="text-warning" style={{ fontSize: '16px', fontWeight: '700',  color: '#F6C54C', lineHeight: '21.52px' }}>SELECT MERCHENT CENTRE</h6>
                  <div className="mt-5">
                    <h5 className="card-header bg-white px-0">Step 3: Select Payment Type</h5>
                    <p className="pt-3" style={{ fontSize: '18px', fontWeight: '400',  color: '#181818', lineHeight: '24.21px' }}>How do you want to pay for this order?</p>
                    <div className="image-payment">
                      <Image src={CardMaster}/>
                      <Image src={Crypto}/>
                    </div>
                    {/* Payment Type Component */}
                    <CardCheckout />
                    <CryptoCheckout />
                  </div>
                </Col>
              </Row>
              <Row>
            <Col sm={12} md={4} lg={4} className="mx-auto">
              <button className="btn btn-primary btn-block" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '26.44px' }}>Pay Now</button>
            </Col>
          </Row>
        </Form>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Card>
            <Card.Header className="d-flex card-header justify-content-between bg-white pt-3">
              <h5 className="text-dark" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '26.9px' }}>YOUR ORDER</h5>
              <h6 className="text-dark" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '26.9px' }}>1 Items</h6>
            </Card.Header>
            <Card.Body>
              
              <div className="d-flex justify-content-between">
                <Card.Text className="text-dark" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '24.21px' }}>Sub-total</Card.Text>
                <Card.Subtitle className="text-dark" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>#1000</Card.Subtitle>
              </div>
              
              <div className="d-flex justify-content-between">
                <Card.Text className="text-dark" style={{ fontSize: '18px', fontWeight: '400', lineHeight: '24.21px' }}>Sub-total</Card.Text>
                <Card.Subtitle className="text-dark" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>#1000</Card.Subtitle>
              </div>
              
              <div className="d-flex justify-content-between">
                <Card.Title style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>TOTAL</Card.Title>
                <Card.Subtitle style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24.21px' }}>#2000</Card.Subtitle>
              </div>
              <div className="py-2">
                <Card.Text className="mr-3 text-warning">
                <Heart className="mr-3" size={20}/>
                  <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px' }}>MOVE TO SAVED ITEMS</span>
                </Card.Text>
              </div>
              <div className="py-2">
                <Card.Text className="mr-3 text-warning">
                  <Archive className="mr-3" size={20}/>
                  <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px' }}>REMOVE</span>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default Checkout
