/***********************************
 * EMPLOYEE DATA (Single Source)
 ***********************************/
const employees = [
  {
    id: "EMP001",
    name: "Yousaf",
    dob: "2/13/2007",
    dept: "Database",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    salary: 45000,
    leaves: 2
  },
  {
    id: "EMP002",
    name: "Asif",
    dob: "6/29/2022",
    dept: "Database",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    salary: 40000,
    leaves: 1
  },
  {
    id: "EMP003",
    name: "Khalil",
    dob: "6/15/2021",
    dept: "Database",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    salary: 42000,
    leaves: 0
  },
  {
    id: "EMP004",
    name: "Latif",
    dob: "6/9/2020",
    dept: "IT",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    salary: 50000,
    leaves: 3
  }
];

/***********************************
 * LOGOUT
 ***********************************/
document.getElementById("logoutBtn").onclick = () => {
  alert("Logged out successfully 👋");
  window.location.href = "index.html";
};

/***********************************
 * SIDEBAR NAVIGATION
 ***********************************/
const menuItems = document.querySelectorAll("#menu li");
const contentArea = document.getElementById("contentArea");

/***********************************
 * PAGE TEMPLATES
 ***********************************/
const pages = {
  dashboard: getDashboardHTML(),
  employees: getEmployeesHTML(),
  departments: `
    <h3>Departments</h3>
    <ul class="dept-list">
      <li>IT</li>
      <li>HR</li>
      <li>Finance</li>
    </ul>
  `,
  leaves: `
    <h3>Leave Requests</h3>
    <table class="table">
      <tr><th>Employee</th><th>Type</th><th>Status</th></tr>
      <tr><td>Rahul</td><td>Sick</td><td>Approved</td></tr>
    </table>
  `,
  salary: `
    <h3>Salary Details</h3>
    <table class="table">
      <tr><th>Name</th><th>Department</th><th>Salary</th></tr>
      ${employees.map(e =>
        `<tr><td>${e.name}</td><td>${e.dept}</td><td>₹${e.salary}</td></tr>`
      ).join("")}
    </table>
  `,
  settings: `
    <h3>Settings</h3>
    <button id="toggleTheme">Toggle Dark Mode</button>
  `
};

/***********************************
 * LOAD DEFAULT PAGE
 ***********************************/
contentArea.innerHTML = pages.dashboard;

/***********************************
 * MENU CLICK HANDLER
 ***********************************/
menuItems.forEach(item => {
  item.onclick = () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const page = item.dataset.page;
    contentArea.innerHTML = pages[page];

    if (page === "employees") renderEmployees();
  };
});

/***********************************
 * DASHBOARD HTML
 ***********************************/
function getDashboardHTML() {
  return `
    <h3>Dashboard</h3>
    <div class="cards">
      <div class="card blue">👥 Total Employees <h2>${employees.length}</h2></div>
      <div class="card green">💰 Total Salary <h2>₹${employees.reduce((s,e)=>s+e.salary,0)}</h2></div>
    </div>
  `;
}

/***********************************
 * EMPLOYEES HTML
 ***********************************/
function getEmployeesHTML() {
  return `
    <div class="employee-header">
      <h3>Manage Employees</h3>
      <input id="searchEmployee" placeholder="Search by ID">
      <button id="addEmployeeBtn">+ Add Employee</button>
    </div>

    <table class="employee-table">
      <thead>
        <tr>
          <th>#</th><th>Image</th><th>Name</th><th>DOB</th><th>Dept</th><th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;
}

/***********************************
 * RENDER EMPLOYEE ROWS (DYNAMIC)
 ***********************************/
function renderEmployees() {
  const tbody = document.querySelector(".employee-table tbody");
  tbody.innerHTML = employees.map((e, i) => `
    <tr data-id="${e.id}">
      <td>${i + 1}</td>
      <td><img src="${e.img}" class="emp-img"></td>
      <td>${e.name}</td>
      <td>${e.dob}</td>
      <td>${e.dept}</td>
      <td>
        <button class="view">View</button>
        <button class="edit">Edit</button>
        <button class="salary">Salary</button>
        <button class="leave">Leave</button>
      </td>
    </tr>
  `).join("");
}

/***********************************
 * GLOBAL BUTTON HANDLER
 ***********************************/
document.addEventListener("click", e => {
  const row = e.target.closest("tr");
  if (!row) return;

  const emp = employees.find(x => x.id === row.dataset.id);
  if (!emp) return;

  if (e.target.classList.contains("view")) {
    alert(`👤 ${emp.name}\nDept: ${emp.dept}\nDOB: ${emp.dob}`);
  }

  if (e.target.classList.contains("edit")) {
    alert(`✏️ Edit ${emp.name}`);
  }

  if (e.target.classList.contains("salary")) {
    alert(`💰 Salary: ₹${emp.salary}`);
  }

  if (e.target.classList.contains("leave")) {
    alert(`📅 Leaves Taken: ${emp.leaves}`);
  }
});

/***********************************
 * SEARCH FILTER
 ***********************************/
document.addEventListener("input", e => {
  if (e.target.id === "searchEmployee") {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll(".employee-table tbody tr").forEach(row => {
      row.style.display = row.dataset.id.toLowerCase().includes(val) ? "" : "none";
    });
  }
});

/***********************************
 * THEME TOGGLE
 ***********************************/
document.addEventListener("click", e => {
  if (e.target.id === "toggleTheme") {
    document.body.classList.toggle("dark-mode");
  }
});
