const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = schema({
    _id: schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String }
});

module.exports = mongoose.model('Product', productSchema);