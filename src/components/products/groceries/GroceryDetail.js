import React from 'react'
import item1lg from '../../images/groceries-image/item-lg.png'
import image1 from '../../images/groceries-image/item1.png'
import { Col, Row, Dropdown, Card } from 'react-bootstrap'
import { ChevronRight, Facebook, Twitter, Linkedin, Cursor } from 'react-bootstrap-icons'

const GroceryDetail = () => {
  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6>Products <ChevronRight></ChevronRight> Groceries <ChevronRight></ChevronRight> <span className="text-primary">Corn flakes</span></h6>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Row className="mb-4">
                <Col md={6}>
                  <div>
                    <img src={item1lg} className="img-fluid" alt="Grocery Item" />
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <h4 className="mt-3">Corn Flakes</h4>
                    <p>Product Code: <strong>12345</strong></p>
                    <hr />
                    <h5 className="text-primary">N 1,000</h5>
                    <hr />

                    <div className="d-flex justify-content-even">
                      <div className="mr-4">
                        <span>Quantity</span>
                      </div>
                        <div className="inc-wrapper mb-4 flex-fill">
                          <button className="minus-btn">&#8722;</button>
                          <span className="item-number">1</span>
                          <button className="plus-btn">&#43;</button>
                        </div>
                    </div>
                      <div style={{ width: '300px' }}>
                        <a href="cart" className="btn btn-block btn-primary">Add To Cart</a>
                      </div>
                    <hr />
                    <div>
                      <p>Share Product</p>
                      <a href="#">
                        <Facebook size={35} className="mr-2" />
                      </a>
                      <a href="#">
                        <Twitter size={35} className="mr-2 bg-primary p-1 rounded-circle text-white" />
                      </a>
                      <a href="#" className="">
                        <Linkedin size={35} className="rounded-circle text-primary mr-2" />
                      </a>
                      <a href="#" className="">
                        <Cursor size={35} className="rounded-circle text-white bg-dark p-1" />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h5>Product Details</h5>
                  <hr />
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores temporibus reiciendis, ad nulla consequuntur placeat nihil aliquam hic totam eius cumque ea quisquam! Recusandae?</p>
                  <p><strong>Serving: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae distinctio nobis eaque dolores nemo libero consequatur, veniam quidem est, corrupti ratione suscipit, a architecto.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="mt-5 mb-4">
            <h6>Other items you might like</h6>  
          </div>

          <div class="owl-carousel">
            <Card className="m-4 bg-white">
              <a href="products/groceries/item" className="text-decoration-none">
                <div className="py-3 px-3 bg-white">
                  <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                  <div className="mt-3">
                    <div className="d-flex justify-between">
                      <p className="card-title">Corn Flakes</p>
                    </div>
                    <div className="card-text">
                      <h5>N 1,000</h5>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="m-4 bg-white">
              <a href="products/groceries/item" className="text-decoration-none">
                <div className="py-3 px-3 bg-white">
                  <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                  <div className="mt-3">
                    <div className="d-flex justify-between">
                      <p className="card-title">Corn Flakes</p>
                    </div>
                    <div className="card-text">
                      <h5>N 1,000</h5>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="m-4 bg-white">
              <a href="products/groceries/item" className="text-decoration-none">
                <div className="py-3 px-3 bg-white">
                  <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                  <div className="mt-3">
                    <div className="d-flex justify-between">
                      <p className="card-title">Corn Flakes</p>
                    </div>
                    <div className="card-text">
                      <h5>N 1,000</h5>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="m-4 bg-white">
              <a href="products/groceries/item" className="text-decoration-none">
                <div className="py-3 px-3 bg-white">
                  <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                  <div className="mt-3">
                    <div className="d-flex justify-between">
                      <p className="card-title">Corn Flakes</p>
                    </div>
                    <div className="card-text">
                      <h5>N 1,000</h5>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="m-4 bg-white">
              <a href="products/groceries/item" className="text-decoration-none">
                <div className="py-3 px-3 bg-white">
                  <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                  <div className="mt-3">
                    <div className="d-flex justify-between">
                      <p className="card-title">Corn Flakes</p>
                    </div>
                    <div className="card-text">
                      <h5>N 1,000</h5>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-primary">Add To Cart</button>
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default GroceryDetail
