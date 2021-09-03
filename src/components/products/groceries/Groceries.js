import React from 'react'
import image1 from '../images/groceries-image/item1.png'
import image2 from '../images/groceries-image/grocery-banner.png'
import image3 from '../images/groceries-image/item3.png'
import image4 from '../images/groceries-image/item4.png'
import image5 from '../images/groceries-image/item5.png'
import { Col, Row, DropdownButton, Dropdown, Card, Nav } from 'react-bootstrap'
import { ChevronRight, HeartFill, Heart } from 'react-bootstrap-icons'
import Accordion  from './Accordion';

const Groceries = () => {
  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6>Products <ChevronRight></ChevronRight> <span className="text-primary">Groceries</span></h6>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div>
            <img src={image2} className="img-fluid" alt="The Groceries Banner" />
          </div>  
        </Col>
      </Row>

      {/* /Product->Category->Grocery->Items */}
      <section className="p-3 my-5">
      <Row>
        <Col md={3}>
          <Card className="mb-5">
            <Accordion title="Category">
              <Card.Body>
                <Nav defaultActiveKey="/" className="flex-column footer-nav">
                  <Nav.Link href="/home" className="fs-6 fw-bold text-dark">Beverages and Cereals </Nav.Link>
                  <Nav.Link href="#" className="text-secondary">Rice, Pasta, Noodles</Nav.Link>
                  <Nav.Link href="#" className="text-secondary">Yam</Nav.Link>
                  <Nav.Link href="#" className="text-secondary">Beans</Nav.Link>
                  <Nav.Link href="#" className="text-secondary">Fruits and Juices</Nav.Link>
                  <Nav.Link href="#" className="text-secondary">Processed</Nav.Link>
                </Nav>
              </Card.Body>
            </Accordion>
          </Card>

          <Card>
            <Accordion title="New Products">
              <Card.Body>
                <Nav defaultActiveKey="/" className="flex-column footer-nav">
                  <Nav.Link href="/home" className="fs-6 fw-bold text-dark">
                    <img src={image3} alt="New Item Image" className="img-fluid" />
                    <span className="ml-2">Tuber of Yam</span> 
                  </Nav.Link>
                  <Nav.Link href="/home" className="fs-6 fw-bold text-dark">
                    <img src={image4} alt="New Item Image" className="img-fluid" />
                    <span className="ml-2">Tuber of Yam</span> 
                  </Nav.Link>
                  <Nav.Link href="/home" className="fs-6 fw-bold text-dark">
                    <img src={image5} alt="New Item Image" className="img-fluid" />
                    <span className="ml-2">Tuber of Yam</span> 
                  </Nav.Link>
                </Nav>
              </Card.Body>
            </Accordion>
          </Card>
            
        </Col>

        <Col md={9}>
          <Card>
            <div className="d-flex justify-between pt-3 px-2">
              <div>
                <h5>Beverage and Cereals</h5>
              </div>

              <div className="ml-auto" style={{ position: 'relative' }}>
                <span style={{position: 'absolute', top: '5px', left: '-80px'}}>Sort By:</span>
                <DropdownButton id="dropdown-basic-button" title="New Products" className="ms-4 sort-btn">
                  <Dropdown.Item href="#/action-1" className="h6 text-dark navlink">New Products</Dropdown.Item>
                  <Dropdown.Item href="#/action-1" className="h6 text-dark navlink">Price - Low to High</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="h6 text-dark navlink">Price - High to Low</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <hr />
              <Row>
                <Col sm={12} md={4}>
                  <Card className="m-4 bg-white">
                    <div className="py-3 px-3 bg-white">
                      <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                      <div className="mt-3">
                        <div className="d-flex justify-between">
                          <p className="card-title">Corn Flakes</p>
                          <span className="ml-auto">
                            <HeartFill size={25} className="text-warning"></HeartFill>
                          </span>
                        </div>
                        <div className="card-text">
                          <h5>N 1,000</h5>
                        </div>
                        <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm={12} md={4}>
                  <Card className="m-4 bg-white">
                    <div className="py-3 px-3 bg-white">
                      <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                      <div className="mt-3">
                        <div className="d-flex justify-between">
                          <p className="card-title">Corn Flakes</p>
                          <span className="ml-auto">
                            <Heart size={25} className="text-warning"></Heart>
                          </span>
                        </div>
                        <div className="card-text">
                          <h5>N 1,000</h5>
                        </div>
                        <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm={12} md={4}>
                  <Card className="m-4 bg-white">
                    <div className="py-3 px-3 bg-white">
                      <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                      <div className="mt-3">
                        <div className="d-flex justify-between">
                          <p className="card-title">Corn Flakes</p>
                          <span className="ml-auto">
                            <HeartFill size={25} className="text-warning"></HeartFill>
                          </span>
                        </div>
                        <div className="card-text">
                          <h5>N 1,000</h5>
                        </div>   
                        <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
          </Card>
        </Col>
      </Row>
      </section>
    </div>
  )
}

export default Groceries
