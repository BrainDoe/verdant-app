import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { User, Heart, Cart } from 'react-bootstrap-icons'
import userIcon from './images/user-icon.png'
import cartSideIcon from './images/cart-side-icon.png'
import heartIcon from './images/heart-icon.png'

const Profile = () => {
  return (
    <div className="py-4">
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: '24px', fontWeight: '500', lineHeight: '35.25px' }}>Account Details</h6>
        </Col>
      </Row>

      <Row>
        <Col md={3} lg={4}>
          <div style={{ backgroundColor: '#F9F9F9', padding: '40px 0', borderRadius: '5px', boxShadow: '0px 4px 28px rgba(55, 133, 247, 0.03)', height: '100%' }}>
            <ul>
              <li className="bg-white d-flex align-items-center justify-items-center py-3 px-3" style={{ borderLeft: '3px solid #F6C54C' }}>
                <img src={userIcon} alt="User Icon" style={{ width: '14.09px', height: '21px', marginRight: '15px' }} />
                <p className="mb-0" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '29.38px' }}>Profile Details</p>
              </li>
              <li className="d-flex align-items-center justify-items-center py-3 px-3">
                <Cart size={20} style={{ marginRight: '15px' }} />
                <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>My Orders</p>
              </li>
              <li className="d-flex align-items-center justify-items-center py-3 px-3">
                <Heart size={20} style={{ marginRight: '15px' }} />
                <p className="mb-0" style={{ fontSize: '20px', fontWeight: '400', lineHeight: '29.38px' }}>Saved Items</p>
              </li>
              <ul style={{ marginLeft: '80px', listStyle: 'none' }}>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Products</li>
                <li style={{ fontSize: '18px', fontWeight: '400', lineHeight: '26.44px' }}>Invoices</li>
              </ul>
            </ul>
          </div>
        </Col>
        <Col md={9} lg={8}>
          <Card>
            <Card.Body>
              <form>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div className="form-group">
                      <label htmlFor="first-name">First Name</label>
                      <input className="first-name" type="text" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input className="email" type="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new-password">New Password</label>
                      <input className="new-password" type="password" id="new-password" placeholder="New Password" />
                    </div>
                    <div>
                      <input className="btn btn-primary btn-block btn-lg" type="submit" value="Save Changes" />
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <div className="form-group">
                      <label htmlFor="surname">Surname</label>
                      <input className="surname" type="text" id="surname" placeholder="Surname" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input className="password" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input className="confirm-password" type="password" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
