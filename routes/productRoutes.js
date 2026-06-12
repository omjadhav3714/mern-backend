// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define specific endpoints
router.get('/', productController.getAllProducts); // Maps to GET /users/
router.post('/', productController.addProduct); // Maps to GET /users/

module.exports = router; // Essential export step
