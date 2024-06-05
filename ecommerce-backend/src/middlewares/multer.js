"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleUpload = void 0;
var multer_1 = require("multer");
var uuid_1 = require("uuid");
var storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads");
    },
    filename: function (req, file, callback) {
        var id = (0, uuid_1.v4)();
        var extName = file.originalname.split(".").pop();
        callback(null, "".concat(id, ".").concat(extName));
    },
});
exports.singleUpload = (0, multer_1.default)({ storage: storage }).single("photo");
