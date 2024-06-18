import React, { useState } from "react";
import axios from "axios";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const request_body = {
      "login": email,
      "password": password,
      "nome": email,
      "role": "USER"
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/register", 
        request_body
      );
      console.log("Signup successful!", response.data);
      // Optionally, you can redirect the user to another page or show a success message here
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
  <div className="container mt-5">
    <h1 className="text-center mb-4">Cadastrar</h1>
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
      <div className="form-group mb-3">
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
      <div className="form-group mb-4">
        <label htmlFor="confirmPassword" className="form-label">Confirmar senha:</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
    </form>
  </div>
  );
}