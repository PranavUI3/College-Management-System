const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rollno: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        index: true
    }
}, { timestamps: true });

const attendanceSave = mongoose.model("attendanceSave", AttendanceSchema, "Attendance_Save");

module.exports = attendanceSave;