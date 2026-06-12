const { mongoose } = require("../db");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, unique: true },
    category: { type: String }
});

module.exports = mongoose.model('Products', productSchema);
