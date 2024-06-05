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
exports.deleteCoupon = exports.allCoupons = exports.applyDiscount = exports.newCoupon = exports.createPaymentIntent = void 0;
var app_js_1 = require("../app.js");
var error_js_1 = require("../middlewares/error.js");
var coupon_js_1 = require("../models/coupon.js");
var utility_class_js_1 = require("../utils/utility-class.js");
exports.createPaymentIntent = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var amount, paymentIntent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                amount = req.body.amount;
                if (!amount)
                    return [2 /*return*/, next(new utility_class_js_1.default("Please enter amount", 400))];
                return [4 /*yield*/, app_js_1.stripe.paymentIntents.create({
                        amount: Number(amount) * 100,
                        currency: "inr",
                    })];
            case 1:
                paymentIntent = _a.sent();
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        clientSecret: paymentIntent.client_secret,
                    })];
        }
    });
}); });
exports.newCoupon = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, coupon, amount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, coupon = _a.coupon, amount = _a.amount;
                if (!coupon || !amount)
                    return [2 /*return*/, next(new utility_class_js_1.default("Please enter both coupon and amount", 400))];
                return [4 /*yield*/, coupon_js_1.Coupon.create({ code: coupon, amount: amount })];
            case 1:
                _b.sent();
                return [2 /*return*/, res.status(201).json({
                        success: true,
                        message: "Coupon ".concat(coupon, " Created Successfully"),
                    })];
        }
    });
}); });
exports.applyDiscount = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var coupon, discount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                coupon = req.query.coupon;
                return [4 /*yield*/, coupon_js_1.Coupon.findOne({ code: coupon })];
            case 1:
                discount = _a.sent();
                if (!discount)
                    return [2 /*return*/, next(new utility_class_js_1.default("Invalid Coupon Code", 400))];
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        discount: discount.amount,
                    })];
        }
    });
}); });
exports.allCoupons = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var coupons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, coupon_js_1.Coupon.find({})];
            case 1:
                coupons = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        coupons: coupons,
                    })];
        }
    });
}); });
exports.deleteCoupon = (0, error_js_1.TryCatch)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, coupon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, coupon_js_1.Coupon.findByIdAndDelete(id)];
            case 1:
                coupon = _a.sent();
                if (!coupon)
                    return [2 /*return*/, next(new utility_class_js_1.default("Invalid Coupon ID", 400))];
                return [2 /*return*/, res.status(200).json({
                        success: true,
                        message: "Coupon ".concat(coupon.code, " Deleted Successfully"),
                    })];
        }
    });
}); });
