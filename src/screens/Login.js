import React, { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const request_body = {
      "login": email,
      "password": password
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/login", request_body);
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log("Login successful! Token saved in local storage:", token);
      // Optionally, you can redirect the user to another page or perform other actions upon successful login
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid email or password");
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
  <div className="container mt-5">
    <h1 className="text-center mb-4">Login</h1>
    {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">E-mail:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="password" className="form-label">Senha:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-blue-button">Atualizar</button>
    </form>
  </div>

  );
}