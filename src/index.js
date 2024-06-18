import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import App from './App.js'
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

import Home from './screens/Home.js';
import Login from './screens/Login.js';
import AddUser from './screens/AddUser.js';
import AddCartao from './screens/AddCartao.js';
import AddContaBancaria from './screens/AddContaBancaria.js';
import UpdateContaBancaria from './screens/UpdateContaBancaria.js';
import Gasto from './screens/Gasto.js';
import AddRenda from './screens/Renda.js';
import ListContaBancaria from './screens/ListContaBancaria.js';
import RendaFixa from './screens/RendaFixa.js';
import RendaVariavel from './screens/RendaVariavel.js';
import ListGastoFixo from './screens/ListGastoFixo.js';
import GastoFixo from './screens/GastoFixo.js';
import UpdateGastoFixo from './screens/UpdateGastoFixo.js';
import GastoVariavel from './screens/GastoVariavel.js';
import ListGastoVariavel from './screens/ListGastoVariavel.js';
import ListRendaFixa from './screens/ListRendaFixa.js';
import ListRendaVariavel from './screens/ListRendaVariavel.js';
import UpdateRendaFixa from './screens/UpdateRendaFixa.js';
import Orcamento from './screens/Orcamento.js';
import UpdateGastoVariavel from './screens/UpdateGastoVariavel.js';
import UpdateRendaVariavel from './screens/UpdateRendaVariavel.js';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      // errorElement: <ErrorScreen/>,
      children: [
          {
              path: "/",
              element: <Home />
            },
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/register",
            element: <AddUser />
          },
          {
            path: "/cartao",
            element: <AddCartao />
          },
          {
            path: "/contabancaria",
            element: <ListContaBancaria />
          },
          {
            path: "/gasto",
            element: <Gasto />
          },
          {
            path: "/renda",
            element: <AddRenda />
          },
          {
            path: "/addcontabancaria",
            element: <AddContaBancaria />
          },
          {
            path: "/rendafixa",
            element: <ListRendaFixa />
          },
          {
            path: "/rendavariavel",
            element: <ListRendaVariavel />
          },
          {
            path: "/addrendafixa",
            element: <RendaFixa />
          },
          {
            path: "/addrendavariavel",
            element: <RendaVariavel />
          },
          {
            path: "/addgastofixo",
            element: <GastoFixo />
          },
          {
            path: "/addgastovariavel",
            element: <GastoVariavel />
          },
          {
            path: "/gastofixo",
            element: <ListGastoFixo />
          },
          {
            path: "/gastovariavel",
            element: <ListGastoVariavel />
          },
          { 
            path: "/updatecontabancaria/:id",
            element: <UpdateContaBancaria />
          },
          {
            path: "/updategastofixo/:id",
            element: <UpdateGastoFixo />
          },
          {
            path: "/updaterendafixa/:id",
            element: <UpdateRendaFixa/>
          },
          {
            path: "/orcamento",
            element: <Orcamento />
          },
          {
            path: "/updategastovariavel/:id",
            element: <UpdateGastoVariavel />
          },
          {
            path: "/updaterendavariavel/:id",
            element: <UpdateRendaVariavel/>
          }
      ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
