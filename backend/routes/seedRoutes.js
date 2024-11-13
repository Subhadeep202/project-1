import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);

    res.send({ createdProducts, createdUsers });
  } catch (error) {
    console.error('Error seeding data:', error);
    res
      .status(500)
      .send({ message: 'Error seeding data', error: error.message });
  }
});

export default seedRouter;
