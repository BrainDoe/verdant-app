import React from 'react'
import { Col, Row, DropdownButton, Dropdown } from 'react-bootstrap'

const Groceries = () => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <h2>Products Category</h2>
        </Col>

        <Col md={8}>
          <card>
            <div>
              <h5>Beverage and Cereals</h5>
              <p>Sorted By: 
              <DropdownButton id="dropdown-basic-button" title="New Products" className="ms-4 sort-btn">
                <Dropdown.Item href="#/action-1" className="fs-7 text-dark navlink">Price - Low to High</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="fs-7 text-dark navlink">Price - High to Low</Dropdown.Item>
              </DropdownButton>
              </p>

            </div>
          </card>
        </Col>
      </Row>
    </div>
  )
}

export default Groceries
