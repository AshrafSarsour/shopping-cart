 
Shopping Cart Application API
=============================

This is the repository for the **Shopping Cart Application API**, a backend server written in TypeScript with Express to handle shopping cart operations. This API allows users to add, remove, and manage items in their shopping cart.

Getting Started
---------------

To get started with the API, follow these steps:

1.**Clone the repository**:
    
    `git clone https://github.com/AshrafSarsour/shopping-cart cd shopping-cart`
    
2.**Install Dependencies**:
    
Make sure you have Node.js and npm (Node Package Manager) installed on your system. Then run the following command to install all the required dependencies:
    
    `npm install`
    
3.**Setup Environment Variables**:
    
Create a `.env` file in the root directory of the project and define the necessary environment variables. You can use the `.env.example` file as a reference.
    
4.**Start the Development Server**:
    
To run the server in development mode, use the following command:
    
    `npm run dev`
    
The server will automatically restart whenever you make changes to the source code.
    

API Endpoints
-------------

The following are the available API endpoints provided by this server:

1.  `GET /api/items`: Fetch a list of available items for sale.
2.  `GET /api/cart`: Retrieve the current items in the shopping cart.
3.  `POST /api/cart/add`: Add an item to the shopping cart.
4.  `POST /api/cart/remove`: Remove an item from the shopping cart.
5.  `Get /api/cart/total`: To Get Total Items price in the shopping cart.


Scripts
-------
The following npm scripts are available for running the server:

*   `npm start`: Start the server in production mode.
*   `npm run dev`: Start the server in development mode using `ts-node-dev`.


Thank you for using the Shopping Cart Application API! Happy shopping! 🛍️