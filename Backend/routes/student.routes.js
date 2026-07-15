const express = require("express");
const Sregrouter = express.Router();
const studentcontroller = require("../controllers/student.controller")

Sregrouter.post('/register', studentcontroller.register);

module.exports = Sregrouter;