"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_js_1 = require("../controllers/user.js");
var auth_js_1 = require("../middlewares/auth.js");
var app = express_1.default.Router();
// route - /api/v1/user/new
app.post("/new", user_js_1.newUser);
// Route - /api/v1/user/all
app.get("/all", auth_js_1.adminOnly, user_js_1.getAllUsers);
// Route - /api/v1/user/dynamicID
app.route("/:id").get(user_js_1.getUser).delete(auth_js_1.adminOnly, user_js_1.deleteUser);
exports.default = app;
