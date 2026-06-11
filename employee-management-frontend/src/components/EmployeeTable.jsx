function EmployeeTable({
  employees,
  editEmployee,
  deleteEmployee
}) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
            <td>{employee.gender}</td>
            <td>{employee.dob}</td>
            <td>{employee.age}</td>
            <td>{employee.mobileNumber}</td>

            <td>
              <button
                className="btn"
                onClick={() => editEmployee(employee)}
              >
                Edit
              </button>

              <button
                className="btn"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;