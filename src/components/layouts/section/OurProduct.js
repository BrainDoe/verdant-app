import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Image from '../../images/slug.png'
import { Link }from 'react-router-dom';


const OurProduct = () => {
  return (
    <>
      <Row className="py-3">
      <Col sm={12} md={6} lg={6}>
        <h5 className="ourProduct">Our Product</h5>
        <div>
            <p className="para">Choose any of our product categories and send Goods and service with ease.</p>
        </div>
        <div style={overlay}>
            <img src={Image} alt="" style={imageStyle}/>
        </div>
      </Col>
      <Col sm={12} md={6} lg={6} className="mx-auto">
        <div className="grid-item">
          <Link to="/products/groceries">
              <div className="item1" style={items}>
                  <h6 style={itemText}>Groceries</h6>
              </div>
          </Link>
             <Link to="/products/groceries">
              <div className="item2" style={items}>
                <h6 style={itemText}>Medical</h6>
              </div>
           </Link>
            <Link to="/products/billPayment">
              <div className="item3" style={items}>
                  <h6 style={itemText}>Bill Payment</h6>
             </div>
            </Link>
             <Link to="/products/invoiceUpload">
              <div className="item4" style={items}>
                <h6 style={itemText}>Invoice Upload</h6>
              </div>
            </Link>
        </div>
      </Col>
    </Row>
    </>
  )
}



const imageStyle = {
  position: 'absolute',
  width: '300px',
  height: '250px',
  left: '-70px',
  top: '-70px'

}

const overlay = {
  position: 'relative',
}

const items = {
  // width: '263px',
  height: '242px',
  marginBottom: '1rem'
}

const itemText = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '138.77%',
  textAlign: 'center',
  color: '#fff',
  paddingTop: '6rem'
 
}

export default OurProduct
