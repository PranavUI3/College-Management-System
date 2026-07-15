const express = require("express");
const Teachlog = express.Router();
const teachercontroller = require("../controllers/teacher.controller")

Teachlog.post('/login', teachercontroller.login)

module.exports = Teachlog;