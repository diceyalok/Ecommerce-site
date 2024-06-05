"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.deleteProduct = exports.updateProduct = exports.newProduct = exports.getSingleProduct = exports.getAdminProducts = exports.getAllCategories = exports.getlatestProducts = void 0;
var error_js_1 = require("../middlewares/error.js");
var product_js_1 = require("../models/product.js");
var utility_class_js_1 = require("../utils/utility-class.js");
var fs_1 = require("fs");
var app_js_1 = require("../app.js");
var features_js_1 = require("../utils/features.js");
// import { faker } from "@faker-js/faker";
// Revalidate on New,Update,Delete Product & on New Order
exports.getlatestProducts = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!app_js_1.myCache.has("latest-products")) return [3 /*break*/, 1];
                products = JSON.parse(app_js_1.myCache.get("latest-products"));
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, product_js_1.Product.find({}).sort({ createdAt: -1 }).limit(5)];
            case 2:
                products = _a.sent();
                app_js_1.myCache.set("latest-products", JSON.stringify(products));
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).json({
                    success: true,
                    products: products,
                })];
        }
    });
}); });
// Revalidate on New,Update,Delete Product & on New Order
exports.getAllCategories = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!app_js_1.myCache.has("categories")) return [3 /*break*/, 1];
                categories = JSON.parse(app_js_1.myCache.get("categories"));
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, product_js_1.Product.distinct("category")];
            case 2:
                categories = _a.sent();
                app_js_1.myCache.set("categories", JSON.stringify(categories));
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).json({
                    success: true,
                    categories: categories,
                })];
        }
    });
}); });
// Revalidate on New,Update,Delete Product & on New Order
exports.getAdminProducts = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!app_js_1.myCache.has("all-products")) return [3 /*break*/, 1];
                products = JSON.parse(app_js_1.myCache.get("all-products"));
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, product_js_1.Product.find({})];
            case 2:
                products = _a.sent();
                app_js_1.myCache.set("all-products", JSON.stringify(products));
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).json({
                    success: true,
                    products: products,
                })];
        }
    });
}); });
exports.getSingleProduct = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var product, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!app_js_1.myCache.has("product-".concat(id))) return [3 /*break*/, 1];
                product = JSON.parse(app_js_1.myCache.get("product-".concat(id)));
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, product_js_1.Product.findById(id)];
            case 2:
                product = _a.sent();
                if (!product)
                    return [2 /*return*/, next(new utility_class_js_1.default("Product Not Found", 404))];
                app_js_1.myCache.set("product-".concat(id), JSON.stringify(product));
                _a.label = 3;
            case 3: return [2 /*return*/, res.status(200).json({
                    success: true,
                    product: product,
                })];
        }
    });
}); });
exports.newProduct = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, price, stock, category, photo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, price = _a.price, stock = _a.stock, category = _a.category;
                photo = req.file;
                if (!photo)
                    return [2 /*return*/, next(new utility_class_js_1.default("Please add Photo", 400))];
                if (!name || !price || !stock || !category) {
                    (0, fs_1.rm)(photo.path, function () {
                        console.log("Deleted");
                    });
                    return [2 /*return*/, next(new utility_class_js_1.default("Please enter All Fields", 400))];
                }
                return [4 /*yield*/, product_js_1.Product.create({
                        name: name,
                        price: price,
                        stock: stock,
                        category: category.toLowerCase(),
                        photo: photo.path,
                    })];
            case 1:
                _b.sent();
                (0, features_js_1.invalidateCache)({ product: true });
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        message: "Product Created Successfully",
                    })];
        }
    });
}); });
exports.updateProduct = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, price, stock, category, photo, product;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, price = _a.price, stock = _a.stock, category = _a.category;
                photo = req.file;
                return [4 /*yield*/, product_js_1.Product.findById(id)];
            case 1:
                product = _b.sent();
                if (!product)
                    return [2 /*return*/, next(new utility_class_js_1.default("Product Not Found", 404))];
                if (photo) {
                    (0, fs_1.rm)(product.photo, function () {
                        console.log("Old Photo Deleted");
                    });
                    product.photo = photo.path;
                }
                if (name)
                    product.name = name;
                if (price)
                    product.price = price;
                if (stock)
                    product.stock = stock;
                if (category)
                    product.category = category;
                return [4 /*yield*/, product.save()];
            case 2:
                _b.sent();
                (0, features_js_1.invalidateCache)({
                    product: true,
                    productId: String(product._id),
                    admin: true,
                });
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Product Updated Successfully",
                    })];
        }
    });
}); });
exports.deleteProduct = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_js_1.Product.findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (!product)
                    return [2 /*return*/, next(new utility_class_js_1.default("Product Not Found", 404))];
                (0, fs_1.rm)(product.photo, function () {
                    console.log("Product Photo Deleted");
                });
                return [4 /*yield*/, product.deleteOne()];
            case 2:
                _a.sent();
                (0, features_js_1.invalidateCache)({
                    product: true,
                    productId: String(product._id),
                    admin: true,
                });
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Product Deleted Successfully",
                    })];
        }
    });
}); });
exports.getAllProducts = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, search, sort, category, price, page, limit, skip, baseQuery, productsPromise, _b, products, filteredOnlyProduct, totalPage;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, search = _a.search, sort = _a.sort, category = _a.category, price = _a.price;
                page = Number(req.query.page) || 1;
                limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
                skip = (page - 1) * limit;
                baseQuery = {};
                if (search)
                    baseQuery.name = {
                        $regex: search,
                        $options: "i",
                    };
                if (price)
                    baseQuery.price = {
                        $lte: Number(price),
                    };
                if (category)
                    baseQuery.category = category;
                productsPromise = product_js_1.Product.find(baseQuery)
                    .sort(sort && { price: sort === "asc" ? 1 : -1 })
                    .limit(limit)
                    .skip(skip);
                return [4 /*yield*/, Promise.all([
                        productsPromise,
                        product_js_1.Product.find(baseQuery),
                    ])];
            case 1:
                _b = _c.sent(), products = _b[0], filteredOnlyProduct = _b[1];
                totalPage = Math.ceil(filteredOnlyProduct.length / limit);
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        products: products,
                        totalPage: totalPage,
                    })];
        }
    });
}); });
// const generateRandomProducts = async (count: number = 10) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     const product = {
//       name: faker.commerce.productName(),
//       photo: "uploads\\5ba9bd91-b89c-40c2-bb8a-66703408f986.png",
//       price: faker.commerce.price({ min: 1500, max: 80000, dec: 0 }),
//       stock: faker.commerce.price({ min: 0, max: 100, dec: 0 }),
//       category: faker.commerce.department(),
//       createdAt: new Date(faker.date.past()),
//       updatedAt: new Date(faker.date.recent()),
//       __v: 0,
//     };
//     products.push(product);
//   }
//   await Product.create(products);
//   console.log({ succecss: true });
// };
// const deleteRandomsProducts = async (count: number = 10) => {
//   const products = await Product.find({}).skip(2);
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     await product.deleteOne();
//   }
//   console.log({ succecss: true });
// };
