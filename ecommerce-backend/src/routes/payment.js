"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_js_1 = require("../middlewares/auth.js");
var payment_js_1 = require("../controllers/payment.js");
var app = express_1.default.Router();
// route - /api/v1/payment/create
app.post("/create", payment_js_1.createPaymentIntent);
// route - /api/v1/payment/coupon/new
app.get("/discount", payment_js_1.applyDiscount);
// route - /api/v1/payment/coupon/new
app.post("/coupon/new", auth_js_1.adminOnly, payment_js_1.newCoupon);
// route - /api/v1/payment/coupon/all
app.get("/coupon/all", auth_js_1.adminOnly, payment_js_1.allCoupons);
// route - /api/v1/payment/coupon/:id
app.delete("/coupon/:id", auth_js_1.adminOnly, payment_js_1.deleteCoupon);
exports.default = app;
