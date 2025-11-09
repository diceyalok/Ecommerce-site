"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.default.Schema({
    code: {
        type: String,
        required: [true, "Please enter the Coupon Code"],
        unique: true,
    },
    amount: {
        type: Number,
        required: [true, "Please enter the Discount Amount"],
    },
});
exports.Coupon = mongoose_1.default.model("Coupon", schema);
