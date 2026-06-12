
const Product = require('../models/productModel');


// controllers/productController.js
exports.getAllProducts = async (req, res) => {
    try {
        const users = await Product.find();
        res.json(users); // Sends raw data to the browser
    } catch (error) {
        res.status(500).json({ error: "Database Error" });
    }
};

exports.addProduct = async (req, res) => {
    try{
        const { name, price, category } = req.body;
        const newProduct = new Product({
            name,
            price,
            category
        });
        await newProduct.save();
        res.status(201).json({
            message: 'Product Created',
            product: newProduct
        });
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Database Error" });
    }
}