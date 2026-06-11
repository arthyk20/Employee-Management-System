const BASE_URL = "http://localhost:8080/employees";

export const getEmployees = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const createEmployee = async (employee) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });
};

export const updateEmployee = async (id, employee) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });
};

export const deleteEmployee = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};