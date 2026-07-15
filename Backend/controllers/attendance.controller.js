const attendanceSave = require("../models/attendance-save.model");
const StudentReg = require("../models/student.model");
const bcrypt = require("bcrypt");

async function attendance (req, res)
{
  try {
    const { rollno, password } = req.body;

    if (!rollno || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const student = await StudentReg.findOne({ rollno });

    let enterpass = password;
    let hashedpass = student.password;

    const match = await bcrypt.compare(enterpass, hashedpass);

    if (!match) {
      return res.status(401).json({
        message: "Password did not match",
      });
    }

    if (!student) {
      return res.status(404).json({
        message: "Did not able to find student",
      });
    }

    const today = new Date();

    const startofday = new Date(today);
    startofday.setHours(0, 0, 0, 0);

    const endofday = new Date(today);
    endofday.setHours(23, 59, 59, 999);

    const doubleatten = await attendanceSave.findOne({
      rollno,
      date: {
        $gte: startofday,
        $lte: endofday,
      },
    });

    if (doubleatten) {
      return res.status(409).json({
        message: "Attendance already marked",
      });
    }

    const attendance = new attendanceSave({
      name: student.name,
      rollno: student.rollno,
    });

    await attendance.save();

    return res.status(200).json({
      message: "Attendance Saved",
    });
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function attendanceshow (req, res)
{
  try {
    const data = await attendanceSave.find({})

    res.status(200).json({
      message: "The data you ask for",
      student: data
    })
  } catch (error) {
    console.log(error)
  }
}

async function remove (req, res)
{
  try {
    const { id } = req.params

    const deletestudent = await attendanceSave.findByIdAndDelete(id)

    if (!deletestudent) {
      return res.status(404).json({
        message: "Did not able to delete"
      })
    }

    return res.status(200).json({ message: 'Deleated' })
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }

}

module.exports = { attendance, attendanceshow, remove };
