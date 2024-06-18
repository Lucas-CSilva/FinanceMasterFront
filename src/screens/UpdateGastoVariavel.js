import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateGastoVariavel = () => {
    const { id } = useParams(); // Recupera o ID da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [gastoVariavel, setGastoVariavel] = useState({
        valor: 0,
        descricao: '',
        dataInicio: null,
        dataFinal: null,
        recorrencia: ''
    });

    useEffect(() => {
        const fetchGastoVariavel = async () => {
            try {
                let token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:8080/gastoVariavel/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setGastoVariavel(response.data); 
            } catch (error) {
                console.error("Erro ao buscar Gasto Variavel", error);
            
            }
        };

        fetchGastoVariavel();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGastoVariavel(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request_body = {
            "id": gastoVariavel.id,
            "valor": gastoVariavel.valor,
            "descricao": gastoVariavel.descricao,
            "dataInicio": gastoVariavel.dataInicio,
            "dataFinal": gastoVariavel.dataFinal,
            "recorrencia": gastoVariavel.recorrencia
        }

        try {
            let token = localStorage.getItem('token');

            await axios.put(`http://localhost:8080/gastoVariavel/update`,
                request_body, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                        }
                }
            );
            navigate('/gastovariavel'); // Redireciona para a lista após a atualização
        } catch (error) {
            console.error("Erro ao atualizar gasto variavel", error);
            // Tratamento de erro adicional
        }
    };

    return (
        <div className="edit-account-container">
          <h2>Editar Gasto Variável</h2>
          <form onSubmit={handleSubmit} className="edit-account-form">
            <div className="form-group">
              <label htmlFor="nome">Descrição:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={gastoVariavel.descricao}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero">Valor:</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={gastoVariavel.valor}
                onChange={handleChange}
              />
            </div>
            <div>
                <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Data Início:</label>
                <DatePicker
                    selected={gastoVariavel.dataInicio ? new Date(gastoVariavel.dataInicio) : null}
                    onChange={date => setGastoVariavel(prevState => ({
                        ...prevState,
                        dataInicio: date
                    }))}
                    dateFormat="dd/MM/yyyy"
                    style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
            </div>
            <div>
                <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Data Final:</label>
                <DatePicker
                    selected={gastoVariavel.dataFinal ? new Date(gastoVariavel.dataFinal) : null}
                    onChange={date => setGastoVariavel(prevState => ({
                        ...prevState,
                        dataFinal: date
                    }))}
                    dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <button type="submit" className="submit-button">Atualizar</button>
          </form>
        </div>
    );

    /*return (
        <div>
            <h2>Editar Gasto Variável</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        name="descricao"
                        value={gastoVariavel.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Valor:</label>
                    <input
                        type="text"
                        name="valor"
                        value={gastoVariavel.valor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Data Inicio:</label>
                    <DatePicker
                        selected={gastoVariavel.dataInicio ? new Date(gastoVariavel.dataInicio) : null}
                        onChange={date => setGastoVariavel(prevState => ({
                            ...prevState,
                            dataInicio: date
                        }))}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <label>Data Final:</label>
                    <DatePicker
                        selected={gastoVariavel.dataFinal ? new Date(gastoVariavel.dataFinal) : null}
                        onChange={date => setGastoVariavel(prevState => ({
                            ...prevState,
                            dataFinal: date
                        }))}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );*/
};

export default UpdateGastoVariavel;