import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { Google } from 'react-bootstrap-icons'
import Logo from './images/logo.PNG'
import loginBarner from './images/login-barner.png'
import eye from './images/eye.png'
import googleIcon from './images/google-icon.png'

const Login = () => {
  return (
    <div>
      <div className="container-login">
        <div className="left">
          <div className="login-form">
            <div className="d-flex">
              <div>
                <img src={Logo} alt="Brand Logo" />
              </div>
              <h2 className="text-primary ml-3" style={{ fontSize: '32.35', fontWeight: '700' }}>Verdant Digital</h2>
            </div>
            <div className="text-center text-dark my-5">
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Login To Verdant</p>
            </div>
            <form action="" className="form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input className="email" type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="password" type="password" id="password" placeholder="Password" />
                <img src={eye} alt="eye" className="eye" />
              </div>
              <div className="form-group">
                <input className="checkbox" type="checkbox" id="checkbox"  />
                <label htmlFor="checkbox" id="checkbox-label">Remember Me</label>
                <a href="#">Forgot Password?</a>
              </div>
              <div className="form-group">
                <input className="submit" type="submit" value="Login" />
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
                <div>  
                  <img src={googleIcon} alt="Google Icon" className="mr-1 img-fluid" />
                </div>
                Google
              </button>

              <p className="no-account text-center">Don't have an account? 
                <LinkContainer to="/signup"> 
                  <a>Create an account</a>
                </LinkContainer>
                {/* <a href="#">Create an account</a> */}
              </p>
            </form>
          </div>
        </div>
        <div className="right">
          <Row>
            <div>
              <img src={loginBarner} alt="Login Barner" />
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Login
