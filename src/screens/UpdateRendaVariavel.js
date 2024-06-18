import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateRendaVariavel = () => {
    const { id } = useParams(); // Recupera o ID da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [rendaVariavel, setRendaVariavel] = useState({
        valor: 0,
        descricao: '',
        dataInicio: null,
        dataFinal: null,
        recorrencia: ''

    });

    useEffect(() => {
        const fetchRendaVariavel = async () => {
            try {
                let token = localStorage.getItem('token');

                console.log("id", id);

                const response = await axios.get(`http://localhost:8080/rendaVariavel/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setRendaVariavel(response.data); // Assume que a API retorna a renda variavel com este ID
            } catch (error) {
                console.error("Erro ao buscar a renda variavel", error);
                // Tratamento de erro adicional
            }
        };

        fetchRendaVariavel();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRendaVariavel(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request_body = {
            "id": rendaVariavel.id,
            "valor": rendaVariavel.valor,
            "descricao": rendaVariavel.descricao,
            "dataInicio": rendaVariavel.dataInicio,
            "dataFim": rendaVariavel.dataFinal,
            "recorrencia": rendaVariavel.recorrencia,
        }

        try {
            let token = localStorage.getItem('token');

            await axios.put(`http://localhost:8080/rendaVariavel/update`,
                request_body, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                        }
                }
            );
            navigate('/rendavariavel'); // Redireciona para a lista após a atualização
        } catch (error) {
            console.error("Erro ao atualizar a renda variavel", error);
            // Tratamento de erro adicional
        }
    };

    return (
        <div className="edit-account-container">
            <h2>Editar Renda Variavel</h2>
            <form onSubmit={handleSubmit} className="edit-account-form">
                <div className="form-group">
                    <label htmlFor="nome">Descrição:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={rendaVariavel.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Valor:</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        value={rendaVariavel.valor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Data Início:</label>
                    <DatePicker
                        selected={rendaVariavel.dataInicio ? new Date(rendaVariavel.dataInicio) : null}
                        onChange={date => setRendaVariavel(prevState => ({
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
                        selected={rendaVariavel.dataFinal ? new Date(rendaVariavel.dataFinal) : null}
                        onChange={date => setRendaVariavel(prevState => ({
                            ...prevState,
                            dataFinal: date
                        }))}
                        dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <form className="mx-auto" style={{ maxWidth: '400px' }}>
                    <div className="form-group mb-4">
                        <label htmlFor="type-field" className="form-label">Recorrencia:</label>
                        <select
                        id="type-field"
                        className="form-control"
                        value={rendaVariavel.recorrencia}
                        onChange={(e) => setRendaVariavel(prevState => ({
                            ...prevState,
                            recorrencia: e.target.value
                        }))}
                        required>
                        <option value="">Selecionar</option>
                        <option value="diaria">Diária</option>
                        <option value="semanal">Semanal</option>
                        <option value="mensal">Mensal</option>
                        <option value="semestral">Semestral</option>
                        <option value="anual">Anual</option>
                        </select>
                    </div>
                </form>    
                <button type="submit" className="submit-button">Atualizar</button>
            </form>
        </div>
    );
};

export default UpdateRendaVariavel;