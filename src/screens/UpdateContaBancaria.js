import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateContaBancaria = () => {
    const { id } = useParams(); // Recupera o ID da URL
    const navigate = useNavigate(); // Para redirecionar após a atualização
    const [contaBancaria, setContaBancaria] = useState({
        nome: '',
        banco: '',
        numero: ''
    });

    useEffect(() => {
        const fetchContaBancaria = async () => {
            try {
                let token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/contaBancaria/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setContaBancaria(response.data); // Assume que a API retorna a conta bancária com este ID
            } catch (error) {
                console.error("Erro ao buscar a conta bancária", error);
                // Tratamento de erro adicional
            }
        };

        fetchContaBancaria();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContaBancaria(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request_body = {
            "id": contaBancaria.id,
            "nome": contaBancaria.nome,
            "banco": contaBancaria.banco,
            "numero": contaBancaria.numero
        }

        try {
            let token = localStorage.getItem('token');

            await axios.put(`http://localhost:8080/contaBancaria/update`,
                request_body, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                        }
                }
            );
            navigate('/contabancaria'); // Redireciona para a lista após a atualização
        } catch (error) {
            console.error("Erro ao atualizar a conta bancária", error);
            // Tratamento de erro adicional
        }
    };

    /*return (
        <div>
            <h2>Editar Conta Bancária</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={contaBancaria.nome}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Banco:</label>
                    <input
                        type="text"
                        name="banco"
                        value={contaBancaria.banco}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Numero:</label>
                    <input
                        type="text"
                        name="numero"
                        value={contaBancaria.numero}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );*/
    return (
        <div className="edit-account-container">
          <h2>Editar Conta Bancária</h2>
          <form onSubmit={handleSubmit} className="edit-account-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={contaBancaria.nome}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="banco">Banco:</label>
              <input
                type="text"
                id="banco"
                name="banco"
                value={contaBancaria.banco}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={contaBancaria.numero}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-button">Atualizar</button>
          </form>
        </div>
    );
};

export default UpdateContaBancaria;