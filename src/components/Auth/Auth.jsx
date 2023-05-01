import React, { useState } from "react";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import "./Auth.scss";

const Signup = ({ onLoginStateChange }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = async () =>{
    const schema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm Password is required"),
    });

    try{
      await schema.validate({ username, email, password, confirmPassword});
      setErrors({});
      return true;
    } catch(error) {
      setErrors({ ...errors, [error.path]: error.message});
    }
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    const isValid = await validate();

    if (!isValid) {
      window.alert("Please provide valid input values");
      return;
    }

    const response = await tempApiCall({ username, email, password });
    console.log(response.success);
    if (response.success) {
      onLoginStateChange(true);
      navigate("/");
    } else {
      window.alert("Signup Failed");
    }
  };
  
  //tempApi to simulate the behavior of an actual API call 
  //without actually connecting to a real backend or database
  const tempApiCall = (values) =>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
        console.log("User Data Saved: ", values);
        resolve({ success: true});
      }, 1000);
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
  
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div>{errors.username}</div>}
          </div>
  
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>
  
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>
  
          <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
          </div>
  
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

const Login = ({ onLoginStateChange }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Perform login logic with username and password
    // Simulating a successful login
    const response = await tempApiCall({ username, password });
    console.log(response.success);
    if (response.success) {
      onLoginStateChange(true);
      // Navigate to home page or any other page after successful login
    } else {
      window.alert("Login Failed");
    }
  };

  //tempApi to simulate the behavior of an actual API call
  //without actually connecting to a real backend or database
  const tempApiCall = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("User Data Checked: ", values);
        resolve({ success: true });
      }, 1000);
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    
  );
};

export { Signup, Login };
