import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const ListRendaVariavel = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
                
        try {
            let token = localStorage.getItem('token');

            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token 
            };

            const response = await axios.get('http://localhost:8080/rendaVariavel/', {
                headers: headers
            });

            setData(response.data);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        
        fetchData();
    }, []); 

    const handleDelete = async (id) => {
        try {
            let token = localStorage.getItem('token');

            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token 
            };

            // Make a request to the backend using the ID
            const response = await axios.delete(`http://localhost:8080/${id}`, {
                headers: headers
            });

            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = (id) => {
        navigate(`/updaterendavariavel/${id}`);   
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; 
    }

    const showItems = (item) => {
        return (
            <tr key={item.id}>
                {/* <th scope='row'>{item.id}</th> */}
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>{formatDate(item.dataInicio)}</td>
                <td>{formatDate(item.dataFinal)}</td>
                <td>{item.recorrencia}</td>
                <td>
                    <button onClick={() => handleUpdate(item.id)}>Editar</button>
                    <button onClick={() => handleDelete(item.id)}>Deletar</button>
                </td>
            </tr>
        );
    };      

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2>Lista de Rendas Fixas</h2>
            </div>
            <div className='col text-end'>
                <Link to="/addrendavariavel" className='btn btn-primary'>Adicionar</Link>
            </div>
            <div className='row'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            {/* <th scope='col'>Id</th> */}
                            <th scope='col'>Descrição</th>
                            <th scope='col'>Valor</th>
                            <th scope='col'>Data de Início</th>
                            <th scope='col'>Data de Fim</th>
                            <th scope='col'>Recorrência</th>
                            <th scope='col'>Ações</th>  {/* Add a header for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map(showItems)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListRendaVariavel;
