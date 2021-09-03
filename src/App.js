import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Slider from './components/layouts/Slider'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import Groceries from './components/products/groceries/Groceries';
import { Container } from 'react-bootstrap';


const  App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Slider} exact />
        <Container>
          <Route path="/products/groceries" component={Groceries} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
