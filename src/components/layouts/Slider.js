import Image1 from '../images/slider1.png'
import Image2 from '../images/slider2.png'
import Image3 from '../images/slider3.png'
import {Link} from 'react-router-dom'



const Slider = () => {
  return (
    <div style={{ backgroundColor: 'rgba(235, 249, 250, 0.14)'}}>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
          <div className="container">
            <div class="carousel-item active" style={{ height: '450px' }}>
            <div className="row">
              <div className="col-md-6">
                  <h3 className="carousel-text">
                   Why Send Cash,
                    When you can send <br /> <span className="text-primary">Goods & Services</span>
                    <div className="line"></div>
                      <div className="py-5">
                    <Link to="/" className="btn btn-primary p-2">Get Started</Link>
                  </div>
                  </h3>
                
              </div>
              <div className="col-md-6 d-none d-md-block">
              <img src={Image1} class="d-block w-100" alt="Slider1" />
              </div>
            </div>
            </div>
            <div class="carousel-item" style={{ height: '450px' }}>
                 <div className="row">
              <div className="col-md-6">
                 <h3 className="carousel-text">
                   75% of cash from <br /> remittance is spent <br /> in <span className="text-primary">4 categories</span>
                    <div className="line"></div>
                     <div className="py-5">
                    <Link to="/" className="btn btn-primary p-2">Get Started</Link>
                  </div>
                  </h3>
              </div>
              <div className="col-md-6 d-none d-md-block">
              <img src={Image2} class="d-block w-100" alt="Slider2" />
              </div>
            </div>
            </div>
            <div class="carousel-item" style={{ height: '450px' }}>
                 <div className="row">
              <div className="col-md-6">
                 <h3 className="carousel-text">
                    We accept all forms <br /> of
                    <span className="text-primary"> Cryptocurrency</span>
                    <div className="line-crypto"></div>
                     <div className="py-5">
                      <Link to="/" className="btn btn-primary p-2">Get Started</Link>
                      </div>
                  </h3>
              </div>
              <div className="col-md-6 d-none d-md-block">
              <img src={Image3} class="d-block w-100" alt="Slider3" />
              </div>
            </div>
            </div>
          </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>
    </div>
  );
};

export default Slider;

