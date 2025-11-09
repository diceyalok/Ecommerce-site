"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_js_1 = require("../middlewares/auth.js");
var stats_js_1 = require("../controllers/stats.js");
var app = express_1.default.Router();
// route - /api/v1/dashboard/stats
app.get("/stats", auth_js_1.adminOnly, stats_js_1.getDashboardStats);
// route - /api/v1/dashboard/pie
app.get("/pie", auth_js_1.adminOnly, stats_js_1.getPieCharts);
// route - /api/v1/dashboard/bar
app.get("/bar", auth_js_1.adminOnly, stats_js_1.getBarCharts);
// route - /api/v1/dashboard/line
app.get("/line", auth_js_1.adminOnly, stats_js_1.getLineCharts);
exports.default = app;
