"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_js_1 = require("../middlewares/auth.js");
var product_js_1 = require("../controllers/product.js");
var multer_js_1 = require("../middlewares/multer.js");
var app = express_1.default.Router();
//To Create New Product  - /api/v1/product/new
app.post("/new", auth_js_1.adminOnly, multer_js_1.singleUpload, product_js_1.newProduct);
//To get all Products with filters  - /api/v1/product/all
app.get("/all", product_js_1.getAllProducts);
//To get last 10 Products  - /api/v1/product/latest
app.get("/latest", product_js_1.getlatestProducts);
//To get all unique Categories  - /api/v1/product/categories
app.get("/categories", product_js_1.getAllCategories);
//To get all Products   - /api/v1/product/admin-products
app.get("/admin-products", auth_js_1.adminOnly, product_js_1.getAdminProducts);
// To get, update, delete Product
app
    .route("/:id")
    .get(product_js_1.getSingleProduct)
    .put(auth_js_1.adminOnly, multer_js_1.singleUpload, product_js_1.updateProduct)
    .delete(auth_js_1.adminOnly, product_js_1.deleteProduct);
exports.default = app;
