import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
// import logo from './assets/logo192.png';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/financemasterlogo.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Finance Master logo"
          />
          {' '}
        Finance Master</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/orcamento">Orçamento</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Cadastrar</Nav.Link>
          <Nav.Link as={Link} to="/cartao">Cartão</Nav.Link>
          <Nav.Link as={Link} to="/contabancaria">Conta Bancária</Nav.Link>
          <Nav.Link as={Link} to="/gasto">Gastos</Nav.Link>
          <Nav.Link as={Link} to="/renda">Rendas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </div>
  );
}

export default App;
