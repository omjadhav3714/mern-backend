// server.js
const cors = require('cors');
const express = require('express');
const User = require('./models/userModel');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

async function protect(req, res, next) {
    // Get token from Header: "Bearer "
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
        return res.status(401).json({ msg: "No Token" });
    try {
        const verified = jwt.verify(token, 'my_super_secret_key');
        const userId = verified.id;
        const user = await User.findById(userId);
        if (!user)
            return res.status(401).json({ msg: "Invalid Token" });
        req.user = user; // Attach user data
        console.log(user);
        next(); // Proceed to route
    } catch (err) {
        console.log(err);
        
        res.status(400).json({ msg: "Invalid Token" });
    }
};

// Middleware for parsing JSON requests
app.use(express.json());
app.use(cors())



// 1. IMPORT THE ROUTES
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Example second route

// 2. USE THE ROUTES (Bind them to specific URL path prefixes)
app.use('/users', userRoutes);       // All paths inside userRoutes now start with /users
app.use('/products', protect, productRoutes);   // All paths inside productRoutes now start with /products

// Global fallback route
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
