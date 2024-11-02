import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());

// Route for products
app.get('/api/products', (req, res) => {
  if (data && data.products) {
    res.send(data.products);
  } else {
    res.status(404).send({ message: 'Products not found' });
  }
});

// Server setup
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
