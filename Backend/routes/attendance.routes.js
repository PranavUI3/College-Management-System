const express = require("express");
const AttendanceRoute = express.Router();
const attendancecontroller = require("../controllers/attendance.controller")

AttendanceRoute.post('/save', attendancecontroller.attendance)
AttendanceRoute.get('/show', attendancecontroller.attendanceshow)
AttendanceRoute.delete('/delete/:id', attendancecontroller.remove)

module.exports = AttendanceRoute; 