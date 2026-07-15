const Teachlog = require("../models/teacher.model");

async function login (req, res)
{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: ('All fields are required')
            })
        }

        const teacher = await Teachlog.findOne({ email, password })

        if (!teacher) {
            return res.status(404).json({
                message: "Invalid email or password"
            })
        }

        return res.status(200).json({
            message: "Logged in",
            teacher: {
                name: teacher.name,
                subject: teacher.subject
            }
        })
    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = { login };