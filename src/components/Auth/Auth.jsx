import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import "./Auth.scss";

const Signup = ({ onLoginStateChange }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid Email Address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Must contain at least one uppercase, one lowercase, one number and one special character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) =>{
      // Check if the form is valid before allowing the user to sign up
      if (!formik.isValid || !formik.dirty) {
        window.alert("Please provide valid input values");
        return;
      }
      const response = await tempApiCall(values);
      console.log(response.success);
      if (response.success){
        onLoginStateChange(true);
        navigate("/");
      } else {
        window.alert("Signup Failed");
      }
    }
  })

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
        <form onSubmit={formik.onSubmit}>

          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username?(
              <div>{formik.errors.username}</div>
            ):null}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email?(
              <div>{formik.errors.email}</div>
            ):null}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ): null}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ): null}
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // perform login logic with username and password
    console.log("Logging in...");
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
