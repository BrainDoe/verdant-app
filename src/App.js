import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Slider from './components/layouts/Slider'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import BillPayments from './components/products/billsPayment/BillPayments';
import Groceries from './components/products/groceries/Groceries';
import GroceryDetail from './components/products/groceries/GroceryDetail';
import Cart from './components/products/groceries/Cart';
import { Container } from 'react-bootstrap';
import CryptoPayment from './components/products/billsPayment/CryptoPayment';
import InvoiceUpload from './components/products/invoiceUpload/InvoiceUpload';
import Checkout from './components/products/checkout/Checkout';
import Section from './components/layouts/section/Section';
import About from './components/layouts/About';



const  App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Slider} exact />
      <main>
        <Container>
          <Route path="/" component={Section} exact />
          <Route path="/products/groceries" component={Groceries} />
          <Route path="/groceries/:id" component={GroceryDetail} />
          <Route path="/cart/:id?" component={Cart} />

          <Route path="/products/billPayment" component={ BillPayments } />
          <Route path="/products/billPayment/crypto" component={ CryptoPayment } />
          <Route path="/products/invoiceUpload" component={ InvoiceUpload } />
          <Route path="/products/checkout" component={ Checkout } />

        </Container>
        <Route path="/about"  component={About}/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
