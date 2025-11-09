"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    photo: {
        type: String,
        required: [true, "Please enter Photo"],
    },
    price: {
        type: Number,
        required: [true, "Please enter Price"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter Stock"],
    },
    category: {
        type: String,
        required: [true, "Please enter Category"],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.Product = mongoose_1.default.model("Product", schema);
