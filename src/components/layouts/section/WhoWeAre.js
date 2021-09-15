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
             <h5 style={wraper}>WHO WE ARE</h5>
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
              disruption, but to embrace it."
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="">
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

const wraper = {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight:' 500',
    fontSize: '36px',
    lineHeight: '173.5%',
    color: '#3785F7'
}



const yello = {
 backgroundColor: '#F6C54C',
  width: '1px',
  height: '30px',
  border: '2px solid #F6C54C',
}

const blue = {
  backgroundColor: '#3785F7',
  width: '1px',
  height: '30px',
  border: '2px solid #3785F7',
}

const textWho = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '167.77%',
  textAlign: 'justify',
  letterSpacing: '0.035em', 
}

const linkMore = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontWize: '14px',
  lineHeight: '111%',
  textAlign: 'center',
  letterSpacing: '0.035em',
  color: ' #3785F7',
  cursor: 'pointer'
}



WhoWeAre.propTypes = {
  wraper: PropTypes.object.isRequired,
}


export default WhoWeAre
