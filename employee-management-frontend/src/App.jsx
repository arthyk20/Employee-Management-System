import { useEffect, useState } from "react";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleSubmit = async (data) => {

    if (editingId) {
      await updateEmployee(editingId, data);
    } else {
      await createEmployee(data);
    }

    loadEmployees();

    
    setEditingId(null);
    setEditingEmployee(null);
  };

  const editEmployee = (employee) => {
    setEditingId(employee.id);
    setEditingEmployee(employee);
  };

 const removeEmployee = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) return;

  await deleteEmployee(id);
  loadEmployees();
};

  return (
    <>
      <h1  className="page-title">Employee Management</h1>

      <EmployeeForm
        onSubmit={handleSubmit}
        editingId={editingId}
        editingEmployee={editingEmployee}
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