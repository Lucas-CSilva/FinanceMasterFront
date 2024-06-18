import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateGastoFixo = () => {
    const { id } = useParams(); // Recupera o ID da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [gastoFixo, setGastoFixo] = useState({
        valor: 0,
        descricao: '',
        dataCompetencia: null
    });

    useEffect(() => {
        const fetchGastoFixo = async () => {
            try {
                let token = localStorage.getItem('token');



                const response = await axios.get(`http://localhost:8080/gastoFixo/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setGastoFixo(response.data); // Assume que a API retorna a conta bancária com este ID
            } catch (error) {
                console.error("Erro ao buscar GastoFixo", error);
                // Tratamento de erro adicional
            }
        };

        fetchGastoFixo();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGastoFixo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request_body = {
            "id": gastoFixo.id,
            "valor": gastoFixo.valor,
            "descricao": gastoFixo.descricao,
            "dataCompetencia": gastoFixo.dataCompetencia
        }

        try {
            let token = localStorage.getItem('token');

            await axios.put(`http://localhost:8080/gastoFixo/update`,
                request_body, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                        }
                }
            );
            navigate('/gastofixo'); // Redireciona para a lista após a atualização
        } catch (error) {
            console.error("Erro ao atualizar gasto fixo", error);
            // Tratamento de erro adicional
        }
    };

    return (
        <div className="edit-account-container">
            <h2>Editar Gasto Fixo</h2>
            <form onSubmit={handleSubmit} className="edit-account-form">
                <div className="form-group">
                    <label htmlFor="nome">Descrição:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={gastoFixo.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Valor:</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        value={gastoFixo.valor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Data Final:</label>
                    <DatePicker
                        selected={gastoFixo.dataFinal ? new Date(gastoFixo.dataFinal) : null}
                        onChange={date => setGastoFixo(prevState => ({
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
};

export default UpdateGastoFixo;