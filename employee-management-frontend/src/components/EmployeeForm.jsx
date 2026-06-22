import { useEffect } from "react";
import { useForm } from "react-hook-form";

function EmployeeForm({ onSubmit, editingId, editingEmployee }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      department: "",
      salary: "",
      gender: "",
      dob: "",
      mobileNumber: ""
    }
  });

  useEffect(() => {
    if (editingEmployee) {
      reset({
        name: editingEmployee.name,
        email: editingEmployee.email,
        department: editingEmployee.department,
        salary: editingEmployee.salary,
        gender: editingEmployee.gender,
        dob: editingEmployee.dob,
        mobileNumber: editingEmployee.mobileNumber
      });
    }
  }, [editingEmployee, reset]);

  const submitHandler = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="employee-form">

      <input
        className="input-field"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      <p className="error">{errors.name?.message}</p>
      <input
        className="input-field"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        })}
      />
      <p className="error">{errors.email?.message}</p>

      <input
        className="input-field"
        placeholder="Department"
        {...register("department", { required: "Department is required" })}
      />
      <p className="error">{errors.department?.message}</p>
      <input
        className="input-field"
        placeholder="Salary"
        type="number"
        {...register("salary", {
          required: "Salary is required",
          min: { value: 1, message: "Salary must be greater than 0" }
        })}
      />
      <p className="error">{errors.salary?.message}</p>

      <select
        className="input-field"
        {...register("gender", { required: "Gender is required" })}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <p className="error">{errors.gender?.message}</p>

      {/* DOB */}
      <input
        className="input-field"
        type="date"
        {...register("dob", { required: "Date of Birth is required" })}
      />
      <p className="error">{errors.dob?.message}</p>

      {/* Mobile */}
      <input
        className="input-field"
        placeholder="Mobile Number"
        {...register("mobileNumber", {
          required: "Mobile number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter valid 10-digit number"
          }
        })}
      />
      <p className="error">{errors.mobileNumber?.message}</p>

      {/* Submit Button */}
      <button
        className="btn"
        type="submit"
        disabled={!isValid}
      >
        {editingId ? "Update Employee" : "Save Employee"}
      </button>

    </form>
  );
}

export default EmployeeForm;