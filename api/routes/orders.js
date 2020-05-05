const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/orders");

// Handle checkAuth here
router.get("/", OrdersController.orders_get_all);

router.post("/", OrdersController.order_create_order);

router.get("/:orderId", OrdersController.order_get_order);

router.delete("/:orderId", OrdersController.order_delete_order);

module.exports = router;
