"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCache = exports.stripe = void 0;
var express_1 = require("express");
var features_js_1 = require("./utils/features.js");
var error_js_1 = require("./middlewares/error.js");
var node_cache_1 = require("node-cache");
var dotenv_1 = require("dotenv");
var morgan_1 = require("morgan");
var stripe_1 = require("stripe");
var cors_1 = require("cors");
// Importing Routes
var user_js_1 = require("./routes/user.js");
var products_js_1 = require("./routes/products.js");
var order_js_1 = require("./routes/order.js");
var payment_js_1 = require("./routes/payment.js");
var stats_js_1 = require("./routes/stats.js");
(0, dotenv_1.config)({
    path: "./.env",
});
var port = process.env.PORT || 4000;
var mongoURI = process.env.MONGO_URI || "";
var stripeKey = process.env.STRIPE_KEY || "";
(0, features_js_1.connectDB)(mongoURI);
exports.stripe = new stripe_1.default(stripeKey);
exports.myCache = new node_cache_1.default();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    res.send("API Working with /api/v1");
});
// Using Routes
app.use("/api/v1/user", user_js_1.default);
app.use("/api/v1/product", products_js_1.default);
app.use("/api/v1/order", order_js_1.default);
app.use("/api/v1/payment", payment_js_1.default);
app.use("/api/v1/dashboard", stats_js_1.default);
app.use("/uploads", express_1.default.static("uploads"));
app.use(error_js_1.errorMiddleware);
app.listen(port, function () {
    console.log("Express is working on http://localhost:".concat(port));
});
