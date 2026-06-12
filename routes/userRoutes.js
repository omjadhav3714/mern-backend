// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define specific endpoints
router.get('/', userController.getAllUsers); // Maps to GET /users/
router.post('/register', userController.createUser); // Maps to GET /users/
router.post('/login', userController.loginUser); // Maps to GET /users/
router.get('/:id', userController.getUserById); // Maps to GET /users/:id

module.exports = router; // Essential export step
