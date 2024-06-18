import React, { useState } from 'react';
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GastoVariavel() {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setdataInicio] = useState('');
  const [dataFim, setdataFim] = useState('');
  const [recorrencia, setrecorrencia] = useState('');

  const handleSubmit = async (e) => {

    const request_body = {
        "valor": valor,
        "descricao": descricao,
        "dataInicio": dataInicio,
        "dataFinal": dataFim,
        "recorrencia": recorrencia
    }

    try {
      let token = localStorage.getItem('token')

      const header = {
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + token 
      }
      
      const response = await axios.post("http://localhost:8080/gastoVariavel/insert",
      request_body,                    
      {
        headers: header
      }
      );

      console.log("gasto variavel successful!", response.data);
    } catch (error) {
      console.error("erro gasto variavel", error);
    }  
    
    setValor(0);
    setDescricao("");
    setdataInicio('');
    setdataFim('');
    setrecorrencia("");
  };

  return (
    <form className="mx-auto" style={{ maxWidth: '400px' }}>
      <div className="form-group mb-3">
        <label htmlFor="descricao">Descrição:</label>
        <input
          type="text"
          id="descricao"
          className="form-control"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="valor">Valor:</label>
        <input
          type="text"
          id="valor"
          className="form-control"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="dataInicio">Data inicio:</label><br />
        <DatePicker
          id="dataInicio"
          className="form-control"
          selected={dataInicio}
          onChange={(date) => setdataInicio(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione a data"
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="dataFim">Data final:</label><br />
        <DatePicker
          id="dataFim"
          className="form-control"
          selected={dataFim}
          onChange={(date) => setdataFim(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione a data"
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="type-field" className="form-label">Recorrencia:</label>
        <select
          id="type-field"
          className="form-control"
          value={recorrencia}
          onChange={(e) => setrecorrencia(e.target.value)}
          required>
          <option value="">Selecionar</option>
          <option value="diaria">Diária</option>
          <option value="semanal">Semanal</option>
          <option value="mensal">Mensal</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Cadastrar Gasto</button>
    </form>
  );
}

export default GastoVariavel;
