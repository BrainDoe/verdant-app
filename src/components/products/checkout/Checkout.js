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
          <h5>CHECKOUT</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card className="p-3">
            <h5 className="card-header bg-white">Step 1: Enter Reciever’s Details</h5>
            <Form>
           <Row  className=" py-2">
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                  <Form.Label>Fullname <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3 formControl" >
                  <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" bg="secondary" />
                </Form.Group>
              </Col>
              </Row>
              <Row>
                  <Col sm={12} md={12} lg={12}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label>Address <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label>Town / City  <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Town / City" />
                  </Form.Group>
                </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
                    <Form.Label>State <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter State" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} >
                  <h5 className="card-header bg-white">Step 2: Choose Delivery Method</h5>
                  <div>
                    <h6 className="pt-3">
                      <Record2 size={23} className="text-primary" />
                      <span>Door Delivery</span>
                    </h6>
                    <p>Delivered between Monday 13 Sep and Wednesday 15 Sep for ₦ 1,000</p>
                  </div>
                  <div>
                    <h6 className="pt-3">
                      <Record2 size={23} />
                      <span>Pickup Centre</span>
                    </h6>
                    <p>Ready for pickup between Wednesday 8 Sep to Thursday 9 Sep with cheaper shipping fees</p>
                  </div>
                  <h6 className="text-warning">SELECT MERCHENT CENTRE</h6>
                  <div className="">
                    <h5 className="card-header bg-white">Step 3: Select Payment Type</h5>
                    <p className="pt-3">How do you want to pay for this order?</p>
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
                <button className="btn btn-primary btn-block">Pay Now</button>
            </Col>
          </Row>
        </Form>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Card>
            <Card.Header className="d-flex card-header justify-content-between bg-white pt-3">
              <h5>YOUR ORDER</h5>
              <h6>1 Items</h6>
            </Card.Header>
            <Card.Body>
              
              <div className="d-flex justify-content-between">
                <Card.Text>Sub-total</Card.Text>
                <Card.Subtitle>#1000</Card.Subtitle>
              </div>
              
              <div className="d-flex justify-content-between">
                <Card.Text>Sub-total</Card.Text>
                <Card.Subtitle>#1000</Card.Subtitle>
              </div>
              
              <div className="d-flex justify-content-between">
                <Card.Title>TOTAL</Card.Title>
                <Card.Subtitle>#2000</Card.Subtitle>
              </div>
              <div className="py-2">
                <Card.Text className="mr-3 text-warning">
                <Heart className="mr-3" size={20}/>
                 MOVE TO SAVED ITEMS
                </Card.Text>
              </div>
              <div className="py-2">
                <Card.Text className="mr-3 text-warning">
                  <Archive className="mr-3" size={20}/>
                  REMOVE
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
