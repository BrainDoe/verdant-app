import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Cart4, ChevronRight, CurrencyDollar, Eye, Lock } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Clock } from 'react-bootstrap-icons';
import ImageHome from '../../images/homepage-multi-icons.png'


const WhoWeAre = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h5 className="ourProduct">Remittance Problems</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6} className="">
          <div className="row">
            <div className="col-md-6">
              <div className=" card mb-4 mt-2">
                <div className="remittanc-icon">
                  <Clock size={40} className="text-primary bg-white rounded-circle"/>
                </div>
                <h5 className="text-primary text-center py-4 mt-2">Speed</h5>
                <div className="bg-primary card-body">
                  <p className="text-white text-center">Can take up to 5 days to receive cash</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                <div className="remittanc-icon">
                  <CurrencyDollar size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Cost</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white text-center">Fees and FXcan cost up to 14%</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Cart4 size={40} className="text-primary remittanc-icon" />
                  
                  </div>
                  <h5 className="text-primary text-center py-4">Convenience</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Recipients have tophysically travel toremittance location to getcash and travel toindividual payment locations to pay bills</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Lock size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Safety</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Physically carrying cashin common remittance destinations is dangerous</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="items card mb-4 mt-2">
                  <div className="remittanc-icon">
                  <Eye size={40} className="text-primary bg-white rounded-circle remittanc-icon" />
                  </div>
                  <h5 className="text-primary text-center py-4">Transparency</h5>
                  <div className="bg-primary card-body">
                    <p className="text-white">Remittance Fees and FX Rates are not made clear to senders</p>
                  </div>
                </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <h5 className="ourProduct">
              Traditional Money Transfers
            </h5>
            <p className="product-text">
              Despite these problems, Traditional Remittance continues to
              be utilized by the underbanked and unbanked population due 
              to familiarity and lack of viable alternatives.
            </p>
            <div className="text-center">
                <img src={ImageHome} alt="Multi-icons-home"  />
            </div>
          </div>
        </Col>
      </Row>


      {/* <Row>
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
      </Row> */}
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
