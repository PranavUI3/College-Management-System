# College Management System

A full-stack college management system prototype designed to manage student registration, teacher authentication, and attendance tracking. This project demonstrates the implementation of a complete frontend and backend workflow using modern web development technologies.

---

## 📌 Project Overview

The College Management System is a prototype web application that provides a basic digital solution for managing college activities.

The system allows:

* Students to register their details.
* Teachers to log in securely.
* Students to mark attendance.
* Teachers to view attendance records.
* Teachers to remove incorrect attendance entries.

The project focuses on understanding full-stack development concepts, API integration, database management, and CRUD operations.

---

## ✨ Features

### 👨‍🎓 Student Module

* Student registration system.
* Stores student details in MongoDB.
* Unique student identification using roll number.
* Student attendance verification using roll number and password.
* Prevents duplicate attendance marking on the same day.

---

### 👨‍🏫 Teacher Module

* Teacher login system.
* Teacher authentication using email and password.
* Teacher dashboard interface.
* Access to class attendance records.

---

### 📚 Attendance Module

* Student attendance marking system.

* Attendance data stored in MongoDB.

* Displays:

  * Student name
  * Roll number
  * Attendance date and time

* Prevents multiple attendance entries for the same student on the same day.

* Allows teachers to delete incorrect attendance records.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API for backend communication

### Backend

* Node.js
* Express.js
* REST API architecture

### Database

* MongoDB
* Mongoose ODM

### Other Tools

* Git
* GitHub
* Postman (API testing)
* VS Code

---

## 📂 Project Structure

```
College-Management-System/

│
├── Frontend/
│   ├── Student Registration
│   ├── Teacher Login
│   ├── Teacher Dashboard
│   ├── Class Attendance
│   └── Student Attendance
│
├── Backend/
│   ├── config/
│   │   └── Database connection
│   │
│   ├── models/
│   │   ├── Student Model
│   │   ├── Teacher Model
│   │   └── Attendance Model
│   │
│   ├── controllers/
│   │
│   ├── routes/
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔄 Application Flow

```
Student Registration
        ↓
Store Student Data
        ↓
Teacher Login
        ↓
Teacher Dashboard
        ↓
Student Marks Attendance
        ↓
Attendance Stored in Database
        ↓
Teacher Views Attendance
```

---

## 🔐 Security Implementation

* Environment variables used for sensitive information.
* MongoDB connection details stored securely using `.env`.
* Password handling implemented using bcrypt hashing.
* Backend validation for user input.

---

## 🚀 Future Improvements

Planned improvements for future versions:

* React.js frontend migration.
* JWT-based authentication.
* HTTP-only cookies.
* Role-based authorization.
* QR code-based attendance system.
* Admin dashboard.
* Student profile management.
* Attendance reports and analytics.
* Deployment on cloud platforms.
* Better UI/UX design.

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Building REST APIs using Express.js.
* Connecting frontend with backend.
* Working with MongoDB and Mongoose.
* Designing MVC architecture.
* Implementing CRUD operations.
* Handling authentication logic.
* Using Git and GitHub for version control.
* Debugging and improving full-stack applications.

---

## 👨‍💻 Author

**Pranav Sharma**

B.Tech Computer Science (Data Science & AI)

---

## ⭐ Project Status

Currently, this project is a functional prototype. Future versions will include more advanced features and improved architecture.
