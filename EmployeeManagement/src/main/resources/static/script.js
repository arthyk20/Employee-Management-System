const BASE_URL = "/employees";

window.onload = function () {
    loadEmployees();

    const form = document.getElementById("employeeForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Blocks default page refresh
            saveEmployee();        // Triggers saving only after HTML validation passes
        });
    }
};
function clearForm() {
    document.getElementById("employeeForm").reset();
    document.getElementById("employeeId").value = "";
}
async function saveEmployee() {

     const employee = {
         name: document.getElementById("name").value,
         email: document.getElementById("email").value,
         department: document.getElementById("department").value,
         salary: Number(document.getElementById("salary").value),
         gender: document.getElementById("gender").value,
         dob: document.getElementById("dob").value,
         mobileNumber: document.getElementById("mobileNumber").value
     };
    
    const id = document.getElementById("employeeId").value;

    if (id) {

        fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(() => {
            clearForm();
            loadEmployees();
        });

    } else {

        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(() => {
            clearForm();
            loadEmployees();
        });
    }

    loadEmployees();
}

async function loadEmployees() {

    const response =
        await fetch(BASE_URL);

    const employees =
        await response.json();

    const tbody =
        document.querySelector(
            "#employeeTable tbody"
        );

    tbody.innerHTML = "";

    employees.forEach(employee => {

        tbody.innerHTML += `

            <tr>

                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.gender}</td>
                <td>${employee.age}</td>
                <td>${employee.mobileNumber}</td>

                <td>
                    <button onclick="editEmployee(${employee.id})">
                        Edit
                    </button>

                    <button
                        onclick="deleteEmployee(${employee.id})">
                        Delete
                    </button>

                </td>

            </tr>

        `;
    });
}

async function deleteEmployee(id) {
    const confirmation = confirm("Are you sure you want to delete this employee?");

    if (confirmation) {
        await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });
        loadEmployees();
    }
}

function editEmployee(id) {

    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(employee => {

            document.getElementById("employeeId").value = employee.id;
            document.getElementById("name").value = employee.name;
            document.getElementById("email").value = employee.email;
            document.getElementById("department").value = employee.department;
            document.getElementById("salary").value = employee.salary;
            document.getElementById("gender").value = employee.gender;
            document.getElementById("dob").value = employee.dob;
            document.getElementById("mobileNumber").value = employee.mobileNumber;
        });
}