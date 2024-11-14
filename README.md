# ShopPlusPlus - E-commerce Web Application

---

## 1. Introduction

**ShopPlusPlus** is a full-stack e-commerce web application that provides users with an online shopping platform to browse products, add them to a cart, place secure orders, manage their profiles, and leave reviews. The application ensures a seamless user experience with features like order history, and secure payment processing, along with an Admin dashboard for product management.

---

## 2. Features

### **User Account Management**

- **Sign-up/Log-in**: Users can create accounts using their email and password. After signing in, they gain access to personalized features like order history, address book, and profile management.
- **Edit User Information**: Users can update their personal information, including name and password.
- **Address Book**: Users can add, update, and delete multiple delivery addresses to use during checkout.

### **Product Browsing**

- **Browse Categories**: Users can explore various product categories (e.g., pants and shirts).
- **Search and Filter**: Users can search for specific products and filter them by categories, price, brand, and ratings. This feature is accessible to both logged-in users and visitors.

### **Cart Management**

- **Add/Remove Products**: Logged-in users can add or remove products from their shopping cart, update quantities, and view the total bill.
- **Live Bill Calculation**: The cart section dynamically updates the total bill whenever the user updates the cart.
- **Direct Add to Cart**: Users can directly add products to the cart without leaving the product detail page.

### **Order History**

- **Order Tracking**: Users can view and track their past orders with status updates.
- **Logged-in Users Only**: This feature is only available to authenticated users.

### **User Reviews and Ratings**

- **Submit Reviews**: Users can leave reviews and ratings for purchased products to help future customers.
- **Aggregated Ratings**: Each product displays an aggregated score based on user ratings.

### **Secure Purchase Handling**

- **Payment Processing**: Supports secure payment methods (e.g., credit/debit cards, PayPal).
- **Encryption and Security**: Ensures all transactions are secure.

---

## 3. Technologies Used

- **Frontend**:
  - React.js, React Router, Redux, Axios, Bootstrap/Material-UI
- **Backend**:
  - Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs
- **Payment Integration**:
  - Stripe or PayPal for secure payment processing.

---

## 4. Project Setup

### **Backend Setup**

1. **Clone the Repository**:

   ```
   git clone "https://github.com/Subhadeep202/shopplusplus.git"
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   JWT_SECRET=<your_jwt_secret>
   MONGODB_URI=<your_mongoDB_connection_string>
   PAYMENT_GATEWAY_API_KEY=<your_payment_gateway_key>
   PORT=4000
   ```

4. **Start the Backend Server**:
   ```
   npm start
   ```
   The server will run on `http://localhost:4000`.

### **Frontend Setup**

1. **Navigate to the Frontend Directory**:

   ```
   cd frondend
   ```

2. **Install Frontend Dependencies**:

   ```
   npm install
   ```

3. **Run the Frontend**:

   ```
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

4. **Connect Frontend to Backend**:
   Make sure the frontend makes API requests to the correct backend URL (e.g., `http://localhost:4000` or a deployed backend URL).

---

### **Root Folder Setup**

1. **Install Frontend Dependencies**:

   ```
   npm init -y
   ```

2. **Environment Configuration**:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   JWT_SECRET=<your_jwt_secret>
   MONGODB_URI=<your_mongoDB_connection_string>
   PAYMENT_GATEWAY_API_KEY=<your_payment_gateway_key>
   PORT=4000
   ```

3. **Start the Backend Server**:
   ```
   npm start
   ```
   The server will run on `http://localhost:4000`.

## 5. Deployment

1. **Deployed in the server:**:

   ```
   https://shopplusplus-yndz.onrender.com
   ```

   Login to AdminDashboard Gmail-admin@gmail.com password-123456

---

## 6. Usage

1. **Sign Up/Log In**: Create an account or log in using an email ID and password.
2. **Browse Products**: Navigate through categories, apply filters, and search for products.
3. **Add to Cart**: Add products to the cart, review the items, and proceed to checkout.
4. **Order History**: After placing an order, view the history and track order status.
5. **Leave Reviews**: After purchasing, leave ratings and reviews for products.
6. **Payment**: Complete the purchase by choosing a payment method and confirming the payment.

---

## 7. Environment Variables

The following environment variables need to be set for the project to run properly:

- **JWT_SECRET**: The secret key used to sign JWT tokens.
- **MONGODB_URI**: MongoDB connection string.
- **PAYMENT_GATEWAY_API_KEY**: The API key for the payment gateway (e.g., Stripe or PayPal).
- **PORT**: The port on which the backend server will run.

---
