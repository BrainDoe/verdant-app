import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Slider from './components/layouts/Slider'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import BillPayments from './components/products/billsPayment/BillPayments';
import Groceries from './components/products/groceries/Groceries';
import GroceryDetail from './components/products/groceries/GroceryDetail';
import { Container } from 'react-bootstrap';
import CryptoPayment from './components/products/billsPayment/CryptoPayment';
import InvoiceUpload from './components/products/invoiceUpload/InvoiceUpload';
import Checkout from './components/products/checkout/Checkout';



const  App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Slider} exact />
        <Container>

          <Route path="/products/groceries" component={Groceries} />
          <Route path="/groceries/:id" component={GroceryDetail} />

          <Route path="/products/billPayment" component={ BillPayments } />
          <Route path="/products/billPayment/crypto" component={ CryptoPayment } />
          <Route path="/products/invoiceUpload" component={ InvoiceUpload } />
          <Route path="/products/checkout" component={ Checkout } />

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
