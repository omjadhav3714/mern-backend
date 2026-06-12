
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// controllers/userController.js
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // Sends raw data to the browser
    } catch (error) {
        res.status(500).json({ error: "Database Error" });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = user.params.id;
        const users = await User.findOne({
            id: userId
        });
        res.json(users); // Sends raw data to the browser
    } catch (error) {
        res.status(500).json({ error: "Database Error" });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save with hashed password
    const user = new User({ 
        "name": name, 
        "email": email, 
        "password": hashedPassword 
    });
    await user.save();
    res.status(201).json({
            message: 'User Created'
        });
}
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Compare passwords
    if(user && await bcrypt.compare(password, user.password)){
        // Generate Token
        const token = jwt.sign( { id: user._id }, 'my_super_secret_key' );
        res.json({ token });
    } else {
        res.status(400).json({
            message: 'Invalid Login'
        });
    }
}
