import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Featured = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  const addToCartHandler = (product) => {
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <main>
      <Banner />
      <h1 className="featured">Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </main>
  );
};

export default Featured;
