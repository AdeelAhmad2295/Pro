import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    role: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    role: "",
  });

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Handle change of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone Number is required";
      valid = false;
    }

    if (!formData.address) {
      formErrors.address = "Address is required";
      valid = false;
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
      valid = false;
    }

    if (!formData.role) {
      formErrors.role = "Role is required";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      navigate("/registersuccess"); // Redirect to the success page
    }
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <h2>Customer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error" : ""}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "error" : ""}
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error" : ""}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="input-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? "error" : ""}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="Customer">Customer</option>
              <option value="machanic">Machanic</option>
            </select>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>

      <style jsx>{`
        .registration-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f7fc;
        }

        .registration-form {
          width: 100%;
          max-width: 450px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 30px;
          margin: 20px;
        }

        h2 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        .input-group {
          margin-bottom: 20px;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          color: #555;
          margin-bottom: 8px;
          display: block;
        }

        input, select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
          margin-top: 8px;
          transition: border-color 0.3s;
        }

        input.error, select.error {
          border-color: red;
        }

        .error-message {
          color: red;
          font-size: 12px;
          margin-top: 4px;
        }

        button.submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button.submit-btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .registration-form {
            padding: 20px;
            margin: 10px;
          }

          h2 {
            font-size: 20px;
          }

          input, select {
            font-size: 16px;
          }

          button.submit-btn {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerForm;
