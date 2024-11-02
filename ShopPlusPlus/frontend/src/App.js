import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Featured from './components/Featured';
import Header from './components/Header';
import ProductScreen from './components/ProductScreen';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="site-container">
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
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
