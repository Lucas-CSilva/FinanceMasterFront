import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateRendaFixa = () => {
    const { id } = useParams(); // Recupera o ID da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [rendaFixa, setRendaFixa] = useState({
        valor: 0,
        descricao: '',
        dataCompetencia: null
    });

    useEffect(() => {
        const fetchRendaFixa = async () => {
            try {
                let token = localStorage.getItem('token');

                console.log("id", id);

                const response = await axios.get(`http://localhost:8080/rendaFixa/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setRendaFixa(response.data); // Assume que a API retorna a renda fixa com este ID
            } catch (error) {
                console.error("Erro ao buscar a renda fixa", error);
                // Tratamento de erro adicional
            }
        };

        fetchRendaFixa();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRendaFixa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request_body = {
            "id": rendaFixa.id,
            "valor": rendaFixa.valor,
            "descricao": rendaFixa.descricao,
            "dataCompetencia": rendaFixa.dataCompetencia
        }

        try {
            let token = localStorage.getItem('token');

            await axios.put(`http://localhost:8080/rendaFixa/update`,
                request_body, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                        }
                }
            );
            navigate('/rendafixa'); // Redireciona para a lista após a atualização
        } catch (error) {
            console.error("Erro ao atualizar a renda fixa", error);
            // Tratamento de erro adicional
        }
    };

    return (
        <div className="edit-account-container">
            <h2>Editar Renda Fixa</h2>
            <form onSubmit={handleSubmit} className="edit-account-form">
                <div className="form-group">
                    <label htmlFor="nome">Descrição:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={rendaFixa.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Valor:</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        value={rendaFixa.valor}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Data competência:</label>
                    <DatePicker
                        selected={rendaFixa.dataCompetencia ? new Date(rendaFixa.dataCompetencia) : null}
                        onChange={date => setRendaFixa(prevState => ({
                            ...prevState,
                            dataCompetencia: date
                        }))}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <button type="submit" className="submit-button">Atualizar</button>
            </form>
        </div>
    );
};

export default UpdateRendaFixa;