"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_js_1 = require("../middlewares/auth.js");
var order_js_1 = require("../controllers/order.js");
var app = express_1.default.Router();
// route - /api/v1/order/new
app.post("/new", order_js_1.newOrder);
// route - /api/v1/order/my
app.get("/my", order_js_1.myOrders);
// route - /api/v1/order/my
app.get("/all", auth_js_1.adminOnly, order_js_1.allOrders);
app
    .route("/:id")
    .get(order_js_1.getSingleOrder)
    .put(auth_js_1.adminOnly, order_js_1.processOrder)
    .delete(auth_js_1.adminOnly, order_js_1.deleteOrder);
exports.default = app;
