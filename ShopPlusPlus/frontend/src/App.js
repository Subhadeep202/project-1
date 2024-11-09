import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Featured from './components/Featured';
import Header from './components/Header';
import ProductScreen from './components/ProductScreen';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer';
import CartScreen from './Screen/CartScreen';
import SigninScreen from './Screen/SigninScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './Screen/ShippingAddressScreen';
import SignupScreen from './Screen/SignupScreen';
import PaymentMethodScreen from './Screen/PaymentMethodScreen';
import PlaceOrderScreen from './Screen/PlaceOrderScreen';

const App = () => {
  return (
    <div className="site-container">
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/Signin" element={<SigninScreen />} />
              <Route path="/Signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/Shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/" element={<Featured />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
