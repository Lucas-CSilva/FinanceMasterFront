import React, { useState } from 'react';
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RendaFixa() {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [dataCompetencia, setDataCompetencia] = useState('');

  const handleSubmit = async (e) => {

    const request_body = {
        "valor": valor,
        "descricao": descricao,
        "dataCompetencia": dataCompetencia  
    }

    try {
      let token = localStorage.getItem('token')

      const header = {
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + token 
      }
      
      const response = await axios.post("http://localhost:8080/rendaFixa/insert",
      request_body,                    
      {
        headers: header
      }
      );

      console.log("renda fixa successful!", response.data);
    } catch (error) {
      console.error("erro renda fixa", error);
    }  
    
    setValor(0);
    setDescricao("");
    setDataCompetencia('');
  };

  return (
    <div>
      <h2>Cadastrar Renda Fixa</h2>
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
          <label htmlFor="dataCompetencia">Data final:</label><br />
          <DatePicker
            id="dataCompetencia"
            className="form-control"
            selected={dataCompetencia}
            onChange={(date) => setDataCompetencia(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data"
            required
          />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Cadastrar Renda Fixa</button>
      </form>
    </div>
  );
}

export default RendaFixa;
