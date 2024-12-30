import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");  // New state for role selection
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetting previous errors
    setErrors({});

    // Validate form fields
    let formIsValid = true;
    const newErrors = {};

    // Email validation
    if (!email) {
      formIsValid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      newErrors.password = "Password is required.";
    }

    // Role validation
    if (!role) {
      formIsValid = false;
      newErrors.role = "Please select your role.";
    }

    // If validation fails, set errors and return
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    console.log("Stored User Data: ", storedUser);

    // Check if the entered email, password, and role match the stored data
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password &&
      storedUser.role === role
    ) {
      console.log("Login successful");

      // Redirect based on the role
      if (storedUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (storedUser.role === "machanic") {
        navigate("/machanic-dashboard");
      } else if (storedUser.role === "Customer") {
        navigate("/customer-dashboard");
      }
    } else {
      // If the email, password, or role is incorrect
      console.log("Invalid email, password, or role.");
      setErrors({
        ...newErrors,
        login: "Invalid email, password, or role.",
      });
    }
  };

  return (
    <div style={styles.loginFormContainer}>
      <div style={styles.loginForm}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={errors.email ? { ...styles.input, ...styles.errorInput } : styles.input}
            />
            {errors.email && <span style={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={errors.password ? { ...styles.input, ...styles.errorInput } : styles.input}
            />
            {errors.password && <span style={styles.errorMessage}>{errors.password}</span>}
          </div>

          {/* Role selection dropdown */}
          <div style={styles.inputGroup}>
            <label>Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={errors.role ? { ...styles.select, ...styles.errorInput } : styles.select}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="machanic">Mechanic</option>
              <option value="Customer">Customer</option>
            </select>
            {errors.role && <span style={styles.errorMessage}>{errors.role}</span>}
          </div>

          {errors.login && <span style={styles.errorMessage}>{errors.login}</span>}

          <button type="submit" style={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  loginFormContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f7fc",
  },
  loginForm: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    margin: "20px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    marginTop: "8px",
    transition: "border-color 0.3s",
  },
  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    marginTop: "8px",
    transition: "border-color 0.3s",
  },
  errorInput: {
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
  },
  submitButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Login;
