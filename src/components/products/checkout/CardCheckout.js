import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

const CardCheckout = () => {
  return (
    <>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label>Card Number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter Card Number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label>Expiry Date <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label>CVC <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="CVC" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                <select class="form-control" name="" id="">
                  <option selected>Nigeria</option>
                  <option value="1">USA</option>
                  <option value="1">UK</option>
                  <option value="1">Ghana</option>
                </select>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group className="mb-3 formControl" controlId="formBasicEmail">
              <Form.Label>Postal Code <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="0012110" />
            </Form.Group>
          </Col>
        </Row>
    </>
  )
}

export default CardCheckout
