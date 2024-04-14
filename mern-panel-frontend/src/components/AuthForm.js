import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api/auth";
import "./Form.css";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await login(username, password);
        if (response.success) {
          alert("Login successful!");
          navigate(`/dashboard?username=${username}`);
        } else {
          alert("Invalid login details. Please try again or register.");
        }
      } else {
        if (password !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return;
        }
        const response = await register(username, password);
        if (response.success) {
          alert("Registration successful!");
          navigate(`/dashboard?username=${username}`);
        } else {
          alert("Username already exists. Please choose another one.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          className="toggle-link"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Sign up here" : "Sign in here"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
