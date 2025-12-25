Employee Attendance Management System

A web-based Employee Attendance Management System developed using HTML, CSS, and JavaScript.
This system allows employees to log in using Password, Face Recognition (simulated), or Fingerprint (simulated) and provides an admin dashboard to manage employees, attendance, salary, leaves, and departments.

Live Demo
https://github.com/Shalini-Vasudevan/employee-attendance.git

Features

Authentication

* Username and Password login
* Face Recognition login using webcam (simulation)
* Fingerprint login (simulation)

Admin Dashboard

* Dynamic dashboard overview
* Attendance tracking using browser LocalStorage
* Recent login activity display

Employee Management

* View employee details
* Add new employees using modal form
* Edit employee (UI ready)
* Salary and leave action buttons
* Search employees by Employee ID

Modules

* Employees
* Departments
* Leaves
* Salary
* Settings (Dark Mode)

User Interface

* Modern and responsive design
* Sidebar navigation
* Modal-based forms
* Dark mode support
* Mobile-friendly layout

Technology Stack

HTML5 – Structure
CSS3 – Styling and responsive layout
JavaScript (ES6) – Logic and interactivity
face-api.js – Face detection
LocalStorage – Attendance data storage
GitHub Pages – Deployment

Project Structure

employee-attendance
index.html        – Login page
dashboard.html    – Admin dashboard
style.css         – Styling
script.js         – Login and biometric logic
dashboard.js      – Dashboard and employee logic

How to Run Locally

1. Clone the repository
   git clone https://github.com/Shalini-Vasudevan/employee-attendance.git

2. Open the project folder
   cd employee-attendance

3. Open index.html in a browser
   (For face recognition, use Live Server or HTTPS)

Deployment

This project is deployed using GitHub Pages.

Steps:

* Push code to GitHub repository
* Go to Settings → Pages
* Select branch: main
* Save and use the generated URL

Demo Login Credentials

Username: root
Password: employee123

Limitations

* Frontend-only project
* No real backend or database
* Biometric login is simulated
* Data stored in browser LocalStorage

Future Enhancements

* Backend integration (Node.js / PHP)
* Database integration (MySQL / MongoDB)
* Real biometric authentication
* Role-based access control
* Export attendance reports (PDF/Excel)

Author

Shalini Vasudevan
GitHub: https://github.com/Shalini-Vasudevan/employee-attendance.git

License

This project is created for educational and learning purposes only.

 😊
