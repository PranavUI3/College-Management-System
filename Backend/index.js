const express = require('express')
const cors = require("cors")
const env = require('dotenv').config();
const connectDB = require('./config/db')
const studentRouter = require('./routes/student.routes')
const TeachRouter = require('./routes/teacher.routes')
const AttendanceRoute = require('./routes/attendance.routes')
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

connectDB()

app.use('/student', studentRouter) // register student
app.use('/teacher', TeachRouter) // teacher login
app.use('/attendance', AttendanceRoute) // save attendance
app.use('/attendance', AttendanceRoute) // show attendance
app.use('/attendance', AttendanceRoute) // delete attendance

app.get('/', (req, res) =>
{
    res.send('Server is live');
})


app.listen(port, () =>
{
    console.log(`Server is live at http://localhost:${port}`)
})