import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import item1lg from '../../images/groceries-image/item-lg.png'
import image1 from '../../images/groceries-image/item1.png'
import { Col, Row, Card } from 'react-bootstrap'
import { ChevronRight, Facebook, Twitter, Linkedin, Cursor, Heart, HeartFill } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { listProductDetails } from '../../../actions/productActions'
import Loader from './Loader'
import Message from './Message'

const GroceryDetail = ({ history, match }) => {
  let [qty, setQty ] = useState(1)


  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  // const product = {}
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${qty}`)
  }

  return (
    
    <div className="py-4">
      {loading === true ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

        <div>
          
          <Row>
            <Col sm={12} md={12} lg={12} className="py-3">
              <h6 style={{ fontSize: '16px', fontWeight: '400' }}>Products <ChevronRight></ChevronRight> Groceries <ChevronRight></ChevronRight> <span className="text-primary" style={{ fontSize: '18px', fontWeight: '500' }}>{product.title}</span></h6>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Row className="mb-4">
                    <Col md={6}>
                      <div>
                        {/* <img src={item1lg} className="img-fluid" alt="Grocery Item" /> */}
                        <img src={product.image} className="img-fluid" alt="Grocery Item" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <h4 className="mt-3" style={{ fontSize: '30px', fontWeight: '500' }}>{product.title}</h4>
                        <p style={{ fontSize: '20px', fontWeight: '500' }}>Product Code: <strong>12345</strong></p>
                        <hr />
                        <h5 className="text-primary" style={{ fontSize: '26px', fontWeight: '500' }}>N {product.price}</h5>
                        <hr />

                        <div className="d-flex justify-content-even">
                          <div className="mr-4">
                            <span style={{ fontSize: '18px', fontWeight: '400' }}>Quantity</span>
                          </div>
                            <div className="inc-wrapper mb-4 flex-fill">
                              <button type="button" className="minus-btn" onClick={() => setQty(qty > 1 ? qty--: 1)}>&#8722;</button>
                              <span className="item-number">{qty}</span>
                              <button type="button" className="plus-btn" onClick={() => setQty(qty++)}>&#43;</button>
                            </div>
                        </div>
                        {/* <LinkContainer to={`/cart/${product.id}`}> */}
                          <div style={{ width: '300px' }}>
                            <button className="btn btn-block btn-primary" style={{ fontSize: '18px', fontWeight: '500' }} onClick={addToCartHandler}>Add To Cart</button>
                          </div>
                        {/* </LinkContainer> */}
                        <hr />
                        <div>
                          <p style={{ fontSize: '20px', fontWeight: '400' }}>Share Product</p>
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
                      <h5 style={{ fontSize: '20px', fontWeight: '500' }}>Product Details</h5>
                      <hr />
                      <p className="mb-4" style={{ fontSize: '16px', fontWeight: '400' }}>{product.description}</p>
                      <p style={{ fontSize: '16px', fontWeight: '400' }}><strong style={{ fontSize: '16px', fontWeight: '700' }}>Serving: </strong>{product.description}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="mt-5 mb-4">
                <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Other items you might like</h6>  
              </div>

              <div class="owl-carousel">
              <Card className="m-4 bg-white" style={{ width: '207', height: '185', borderRadius: '3px' }}>
                  <div className="py-3 px-3 bg-white">
                  <LinkContainer to={`/groceries/`}>
                    <a className="text-decoration-none">
                        <img src={image1} alt="Grocery Item"  className="card-img" alt="Grocery Item" />
                    </a>
                  </LinkContainer>
                    <div className="mt-3">
                      <div className="d-flex justify-between">
                      <LinkContainer to={`/groceries/`}>
                        <a className="text-decoration-none">
                          <p className="card-title text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>{}</p>
                        </a>
                      </LinkContainer>
                        <span className="ml-auto">
                          <Heart size={25} className="text-warning" style={{ cursor: 'pointer' }}></Heart>  
                        </span>
                      </div>
                      <div className="card-text text-dark">
                        <h5 style={{ fontSize: '18px', fontWeight: '500' }}>${}</h5>
                      </div>
                      <button type="submit" className="btn btn-block btn-outline-primary" style={{ fontSize: '14px', fontWeight: '500' }}>Add To Cart</button>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
            
      )}
    </div>
  )
}

export default GroceryDetail
