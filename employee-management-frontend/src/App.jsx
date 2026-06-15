import { useEffect, useState } from "react";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);

  const [editingId, setEditingId] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  department: "",
  salary: "",
  gender: "",
  dob: "",
  mobileNumber: ""
});

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateEmployee(editingId, formData);
    } else {
      await createEmployee(formData);
    }

    loadEmployees();

    setFormData({
      name: "",
      email: "",
      department: "",
      salary: "",
      gender: "",
      dob: "",
      mobileNumber: ""
    });

    setEditingId(null);
  };

  const editEmployee = (employee) => {
    setEditingId(employee.id);
    setFormData(employee);
  };

  const removeEmployee = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <>
      <h1>Employee Management</h1>

      <EmployeeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />

      <EmployeeTable
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={removeEmployee}
      />
    </>
  );
}

export default App;