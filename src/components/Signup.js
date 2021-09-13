import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { Google } from 'react-bootstrap-icons'
import Logo from './images/logo.PNG'
import signupBarner from './images/signup-barner.png'
import eye from './images/eye.png'
import googleIcon from './images/google-icon.png'

const Signup = () => {
  return (
    <div>
      <div className="container-login">
        <div className="right">
          <Row>
            <div>
              <img src={signupBarner} alt="Signup Barner" />
            </div>
          </Row>
        </div>

        <div className="left">
          <div className="login-form">
            <div className="d-flex">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
              <h2 className="text-primary ml-3" style={{ fontSize: '32.35', fontWeight: '700' }}>Verdant Digital</h2>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Create a Verdant account to begin an amazing experience</p>
            </div>
            <form action="" className="form">
              <div className="form-group">
                <label htmlFor="full-name">Full Name</label>
                <input className="full-name" type="text" id="full-name" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="email" type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input className="phone" type="phone" id="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="password" type="password" id="password" placeholder="Password" />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="form-group">
                <input className="submit" type="submit" value="Create Account" />
              </div>

              <div className="or-container">
                <div className="left-line"></div>
                <span>or</span>
                <div className="right-line"></div>
              </div>

              {/* <div className="google">
                <a>
                  <img src={googleIcon} alt="Google Icon" />
                  Google
                </a>
              </div> */}
              <div className="mt-5"></div>
              
              <button className="btn btn-outline-primary p-3 btn-block">
                <img src={googleIcon} alt="Google Icon" className="mr-1" />
                Google
              </button>

              <p className="no-account text-center">Already have account? 
                <LinkContainer to="/signup"> 
                  <a>Login</a>
                </LinkContainer>
                {/* <a href="#">Create an account</a> */}
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup
