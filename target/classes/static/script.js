const BASE_URL =
    "http://localhost:8080/employees";

window.onload = function () {
    loadEmployees();
};
function clearForm() {

    document.getElementById("employeeId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("mobileNumber").value = "";
}
async function saveEmployee() {

    const employee = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        department:
            document.getElementById("department").value,

        salary:
            Number(
                document.getElementById("salary").value
            ),

        gender:
            document.getElementById("gender").value,

        dob:
            document.getElementById("dob").value,

        mobileNumber:
            document.getElementById("mobileNumber").value
    };
    
    const id = document.getElementById("employeeId").value;

    if (id) {

        fetch(`http://localhost:8080/employees/${id}`, {
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

        fetch("http://localhost:8080/employees", {
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

    await fetch(
        `${BASE_URL}/${id}`,
        {
            method: "DELETE"
        }
    );

    loadEmployees();
}

function editEmployee(id) {

    fetch(`http://localhost:8080/employees/${id}`)
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