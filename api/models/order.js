const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = schema({
    _id: schema.Types.ObjectId,
    product: { type: schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);