const mongoose = require("mongoose");

const Teacherschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Teachlog = mongoose.model('Teachlog', Teacherschema, "Teacher_Login");

module.exports = Teachlog;