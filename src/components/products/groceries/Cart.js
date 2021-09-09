import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  Message  from './Message'
import { Row, Col, Card, Form } from 'react-bootstrap'
import image1 from '../../images/groceries-image/item1.png'
import { Heart, HeartFill, TrashFill } from 'react-bootstrap-icons'
import { addToCart } from '../../../actions/cartAtions'

const Cart = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(qty)

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  

  return (
    <div className="py-5">
      <Row className="py-4">
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '18px', fontWeight: '500', fontWeight: '26.44' }}>Shipping Cart</h6>
        </Col>
      </Row>
          <Row>
            <Col md={8}>
              <Row style={{ backgroundColor: '#E5E5E5' }}>
                <Col md={6}>
                  <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Product</p>
                </Col>
                <Col md={3}>
                  <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Quantity</p>
                </Col>
                <Col md={3}>
                <p style={{ fontSize: '20px', fontWeight: '500',  paddingTop: '15px' }}>Price</p>
                </Col>
              </Row>

              {cartItems.length === 0 ? (<Message>Your Cart is empty</Message>) : (
                    <div>
                {cartItems.map(item => (
              
              <Row className="bg-white py-4" key={item.product}>
                <Col md={6} className="py-4">
                  <div className="d-flex justify-space-between">
                    <img src={item.image} alt="Cart Item Image" style={{ height:'200px', width: "300px" }} className="img-fluid" />
                    <div className="ml-4">
                      <p style={{ fontSize: '18px', fontWeight: '500' }} className="pt-5">{item.name}</p>
                    </div>
                  </div>
                </Col>
                <Col md={3} as="div" className="my-auto">
                  <div >
                    <div className="inc-wrapper mb-4 flex-fill">
                      <button className="minus-btn">&#8722;</button>
                      <span className="item-number">{item.qty}</span>
                      <button className="plus-btn">&#43;</button>
                    </div>
                  </div>
                </Col>
                <Col md={3} as="div" className="my-auto">
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: '500' }}>${item.price}</p>
                  </div>
                </Col>
              </Row>
             
              ))}

               </div>

              )}
              <Row className="bg-white pb-3">
                <Col md={12}>
                  <Heart className="mr-2 text-warning" size={20}/>
                  <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px', marginRight: '15px', color: '#F6C54C', cursor: 'pointer' }}>MOVE TO SAVED ITEMS</span> 
                    <span style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16.14px', color: '#F6C54C', cursor: 'pointer' }}>
                      <TrashFill className="mr-2 text-warning" size={20} />
                      REMOVE
                    </span>
                </Col>
             
              </Row>
            </Col>

            <Col md={4}>
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
                  <Form>
                    <Row className="mt-4">
                      <Col md={12}>
                        <div className="mx-auto" style={{ width: '257px' }}>
                          <button className="btn btn-primary btn-block">Proceed To Checkout</button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>   
  )
}

export default Cart
