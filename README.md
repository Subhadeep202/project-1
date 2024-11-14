# ShopPlusPlus - E-commerce Web Application

---

## 1. Introduction

**ShopPlusPlus** is a full-stack e-commerce web application that provides users with an online shopping platform to browse products, add them to a cart, place secure orders, manage their profiles, and leave reviews. The application ensures a seamless user experience with features like a wishlist, order history, and secure payment processing. With Admin dashboard with ading product and deleting products.

---

## 2. Features

### **User Account Management**

- **Sign-up/Log-in**: Users can create accounts using their email and password. After signing in, they gain access to personalized features like order history, address book, and profile management.
- **Edit User Information**: Once logged in, users can update their personal information, including their name and password.
- **Address Book**: Users can add, update, and delete multiple delivery addresses. This allows them to store several addresses and select a preferred one during checkout.

### **Product Browsing**

- Users can browse through various product categories (e.g.,pants and shirts )
- **Search and Filter**: Users can search for specific products and filter them based on categories, price, brand, and ratings. This feature is accessible to both logged-in users and visitors.

### **Cart Management**

- **Add/Remove Products**: Logged-in users can add or remove products from their shopping cart, update quantities, and view the total bill.
- **Live Bill Calculation**: The cart section dynamically updates the total bill whenever the user updates the cart (e.g., changes quantity, removes items).
- **Direct Add to Cart**: Users can directly add products to the cart without leaving the product detail page.

### **Order History**

- Users can access a history of their past orders, track their current orders, and receive updates on the status of each order.
- **Order Tracking**: Users will be notified of order processing stages.
- **Logged-in Users Only**: This feature is only available to authenticated users.

### **User Reviews and Ratings**

- Users can leave reviews and ratings for the products they purchase, helping future customers make informed buying decisions.
- **Aggregated Ratings**: Each product displays an aggregated score based on user ratings.
- **Review System**: Reviews can include feedback, photos, and a star rating (1 to 5 stars).

### **Secure Purchase Handling**

- **Payment Processing**: The application supports a secure payment system that allows users to pay via various methods (credit/debit cards, PayPal, etc.).
- **Encryption and Security**: All transactions are processed securely with encryption to protect user data and ensure safe online shopping.

---

## 3. Technologies Used

- **Frontend**:
  - React.js for dynamic rendering and UI components.
  - React Router for routing and navigation.
  - Redux for state management.
  - Axios for handling HTTP requests.
  - Bootstrap or Material-UI for styling.
- **Backend**:
  - Node.js and Express.js for creating the server and RESTful APIs.
  - MongoDB (via Mongoose) for database management and storing user, product, and order data.
  - JWT (JSON Web Token) for secure user authentication.
  - bcryptjs for password encryption and hashing.
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

Deployed the Project in render.

1. **Deployment link**:
   `bash
    git clone "https://github.com/Subhadeep202/shopplusplus.git"
    `
   You can deploy the backend using platforms like **Heroku** or **Render**:
1. Set up the environment variables on the platform.
1. Deploy the backend by following the platform's instructions.

## 5. Deployment

### **Deployment**

1. **Deployment link**:

   ```bash
   link: "https://shopplusplus-yndz.onrender.com"
   ```

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
