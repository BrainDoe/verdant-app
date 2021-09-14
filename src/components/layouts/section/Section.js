import OurProduct from './OurProduct';
import WhoWeAre from './WhoWeAre'
import OurSolution from './OurSolution'
import HowItWorks from './HowItWorks';
import { Route } from 'react-router-dom';

const Section = () => {
  return (
    <>
      <div className="py-5">
      <WhoWeAre />
      </div>
      <div className="py-5">
        <OurProduct />
      </div>
      <div className="py-5">
        <OurSolution />
      </div>
      <div className="py-5">
        <HowItWorks/>
      </div>
    </>
  )
}

export default Section;
