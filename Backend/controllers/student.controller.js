const StudentReg = require("../models/student.model");
const bcrypt = require("bcrypt");

async function register (req, res)
{
    try {
        const { name, email, rollno, password } = req.body;

        if (!name || !email || !rollno || !password) {
            return res.status(400).json({
                error: ('All fields are required')
            })
        }

        const useremail = await StudentReg.findOne({ email })

        if (useremail) {
            return res.status(409).json({
                message: 'This email is already in use'
            })
        }

        const userrollno = await StudentReg.findOne({ rollno })

        if (userrollno) {
            return res.status(409).json({
                message: 'This rollno is already use'
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const student = new StudentReg({
            name,
            email,
            rollno,
            password: hashedpassword
        })

        await student.save();

        res.status(201).json({
            message: 'Data save Successfully'
        })
    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

module.exports = { register };