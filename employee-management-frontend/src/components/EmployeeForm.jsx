function EmployeeForm({
  formData,
  handleChange,
  handleSubmit,
  editingId
}) {
  return (
    <form onSubmit={handleSubmit} className="employee-form">

      <input
        className="input-field"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        className="input-field"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        className="input-field"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />

      <input
        className="input-field"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <input
        className="input-field"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <input
        className="input-field"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />

      <input
        className="input-field"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleChange}
      />

      <button className="btn" type="submit">
        {editingId ? "Update Employee" : "Add Employee"}
      </button>

    </form>
  );
}

export default EmployeeForm;