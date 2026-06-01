const BASE_URL =
    "http://localhost:8080/employees";

window.onload = function () {
    loadEmployees();
};

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

    await fetch(BASE_URL, {

        method: "POST",

        headers: {
            "Content-Type":
                "application/json"
        },

        body:
            JSON.stringify(employee)
    });

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