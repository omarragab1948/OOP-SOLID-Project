import React, { useState } from "react";
import { UserHandlerHook } from "../context";
import { IUser, Roles } from "../types/user";

interface User {
  name: string;
  age: number | string;
  role: string;
}

const CreateUserForm: React.FC = () => {
  const { users} = UserHandlerHook()
  console.log(users);

  const [user, setUser] = useState<IUser>({ name: "", age: 0, role: Roles.Employee });
  const [errors, setErrors] = useState<Partial<User>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<User> = {};

    if (!user.name) {
      newErrors.name = "Name is required";
    }

    if (+user.age < 18 || +user.age > 100) {
      newErrors.age = "Age must be between 18 and 100";
    }

    if (!user.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User created:", user);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? parseInt(value, 10) : value,
    }));
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={user.age}
          onChange={handleChange}
          className={errors.age ? "error" : ""}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={user.role}
          onChange={handleChange}
          className={errors.role ? "error" : ""}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="general-manager">General Manager</option>
          <option value="branch-manager">Branch Manager</option>
          <option value="supervisor">Supervisor</option>
          <option value="employee">Employee</option>
        </select>
        {errors.role && <span className="error-message">{errors.role}</span>}
      </div>

      <button type="submit" className="submit-button">
        Create User
      </button>
    </form>
  );
};

export default CreateUserForm;
