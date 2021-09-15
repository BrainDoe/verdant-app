import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';

const OurSolution = () => {
  const [showInfo1, setShowInfo1] = useState(true)
  const [showInfo2, setShowInfo2] = useState(false)
  const [showInfo3, setShowInfo3] = useState(false)
  const [showInfo4, setShowInfo4] = useState(false)

    // useEffect(() => {
    //   if (showInfo1) {
    //       setShowInfo2(false)
    //       setShowInfo3(false)
    //       setShowInfo4(false)
    //   } else if (showInfo2) {
    //       setShowInfo1(false)
    //       setShowInfo3(false)
    //       setShowInfo4(false)
    //   } else if(showInfo3) {
    //       setShowInfo1(false)
    //       setShowInfo2(false)
    //       setShowInfo4(false)
    //   } else if(showInfo4) {
    //        setShowInfo1(false)
    //       setShowInfo2(false)
    //       setShowInfo3(false)
    //     }
    //  }, [showInfo1, showInfo2, showInfo3, showInfo4])

  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12} className="text-center py-4">
           <h5 style={wraper}>OUR SOLUTION</h5>
           <p className="text-para">One Platform, Multiple Solutions</p>
        </Col>
      </Row>
      <div className="row">
        <div className=" col-md-6 d-none d-md-block">
        
          {
            showInfo1 && <div className="solution1" style={{ height: ' 400px' }}></div>
          }

          {
            showInfo2 && <div className="solution2" style={{ height: ' 400px' }}></div>
          }

          {
            showInfo3 && <div className="solution3" style={{ height: ' 400px' }}></div>
          }

          {
            showInfo4 && <div className="solution4" style={{ height: ' 400px' }}></div>
          }
          
        </div>
        <div  className=" col-md-6">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header  bg-white p-4" id="flush-headingOne">
              <button className="accordion-button collapsed btn-accordion btn-block bg-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ paddingRight: '0' }} onClick={() => setShowInfo1(!showInfo1)}>
                 <span className="text-dark" style={{ fontSize: '20px', paddingRight: '0' }}> Exclusive Partnerships</span>
                <span>
                  {
                    showInfo1
                      ?
                    <Dash size={30} className="text-primary float-right" />
                      :
                    <Plus size={30} className="text-primary float-right" />
                  }
                  
                </span>
              </button>
          </h2>
          <div id="flush-collapseOne" className={showInfo1 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body p-4 bg-white">
               <p style={page}>Through exclusive partnerships we offer you the best deals</p>
            </div>
              </div>
              
          <div className="accordion-item">
            <h2 className="accordion-header bg-white p-3" id="flush-headingTwo">
                <button className="accordion-button collapsed btn-accordion btn-block bg-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                 onClick={() => setShowInfo2(!showInfo2)}>
                <span className="text-dark" style={{ fontSize: '20px', paddingRight: '0' }}> Technology Integration</span>
                <span>
                  {
                    showInfo2
                      ?
                    <Dash size={30} className="text-primary float-right" />
                      :
                    <Plus size={30} className="text-primary float-right" />
                  }
                    
                </span>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body p-4 bg-white">
                  <p style={page}>We provide the easiest solution through deep technology integration.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-white p-3" id="flush-headingThree">
                <button className="accordion-button collapsed btn-accordion btn-block bg-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"
                 onClick={() => setShowInfo3(!showInfo3)}>
               <span className="text-dark" style={{ fontSize: '20px', paddingRight: '0' }}>Over 100,000 Merchant locations</span>
                <span>
                  {
                    showInfo3
                      ?
                    <Dash size={30} className="text-primary float-right" />
                      :
                    <Plus size={30} className="text-primary float-right" />
                  }
                    
                </span>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body p-4 bg-white">
                  <p style={page}>We have over 100,000 Merchant locations across the country, including all Shoprite, Spar outlets, and other local supermarket brands.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-white p-3" id="flush-headingFour">
                <button className="accordion-button collapsed btn-accordion btn-block bg-white d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"
                 onClick={() => setShowInfo4(!showInfo4)}>
               <span className="text-dark" style={{ fontSize: '20px', paddingRight: '0' }}>Easy Remittance</span>
                <span>
                  {
                    showInfo4
                      ?
                    <Dash size={30} className="text-primary float-right" />
                      :
                    <Plus size={30} className="text-primary float-right" />
                  }
                    
                </span>
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body p-4 bg-white">
                 <p style={page}>Instead of focusing on improving traditional cash remittance, We created a product and platform that makes cash remittance easier.</p>
              </div>
            </div>
          </div>
        </div>
       </div>    
        </div>
      </div>
    </>
  )
}

const wraper = {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight:' 500',
    fontSize: '36px',
    lineHeight: '173.5%',
    color: '#3785F7',
}


const page = {
  fontFamily: 'Heebo',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '134.5%',
}
export default OurSolution
