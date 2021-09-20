import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { ChevronRight } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const WhoWeAre = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h5 className="ourProduct">WHO WE ARE</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className="heading">
            <div>
              <div style={yello}>
              </div>
              <div style={blue}>
              </div>
            </div>
            <p className="para" style={{ marginLeft: '1rem' }}>
              "Our duty is not to fight the 
              disruption, <br /> but to embrace it."
            </p>
          </div>
          <p className="product-text">Instead of focusing on improving traditional cash remittance, <br /> <strong> <span className="text-warning"> Bud </span> <span className="text-primary">Logistics</span></strong> has created a product and platform that can render cash remittance obsolete</p>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <p style={textWho}>
              The next generation of Financial Services will be fundamentally different.
            </p>
            <p style={textWho}>
             Our duty is not to fight the disruption, but to embrace it. The journey to fairer, faster, and ubiquitous global access to value has just begun.
            </p>
          </div>
          <LinkContainer to="/product/kolo">
          <Link to="/" className="text-decoration-none" style={linkMore}>Read More
            <ChevronRight className="text-warning" size={10}/>
            <ChevronRight className="text-warning" size={10}/>
          </Link>
          </LinkContainer>
        </Col>
      </Row>
    </>
  )
}





const yello = {
 backgroundColor: '#F6C54C',
  width: '1px',
  height: '20px',
  border: '2px solid #F6C54C',
}

const blue = {
  backgroundColor: '#3785F7',
  width: '1px',
  height: '20px',
  border: '2px solid #3785F7',
}

const textWho = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  // lineHeight: '167.77%',
  textAlign: 'justify',
  // letterSpacing: '0.035em',
  fontFamily: 'heebo' 
}

const linkMore = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '111%',
  textAlign: 'center',
  letterSpacing: '0.035em',
  color: ' #3785F7',
  cursor: 'pointer',
  fontFamily: 'heebo'
}



WhoWeAre.propTypes = {
  linkMore: PropTypes.object.isRequired,
  textWho: PropTypes.object.isRequired,
  blue: PropTypes.object.isRequired,
  yello: PropTypes.object.isRequired,
}


export default WhoWeAre
