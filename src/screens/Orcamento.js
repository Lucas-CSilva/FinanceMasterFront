import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Orcamento = () => {
    const [data, setData] = useState({
        totalGastoFixo: 0,
        totalGastoVariavel: 0,
        totalRendaFixa: 0,
        totalRendaVariavel: 0,
        totalRenda: 0,
        totalGasto: 0,
        totalMensal: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

    const fetchData = async () => {
        try {
            let token = localStorage.getItem('token');
            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token 
            };

            //const response = await axios.get('http://localhost:8080/orcamento/', { headers });
            console.log("Datas: " + dataInicio + "|" + dataFim);
            const response = await axios.get(`http://localhost:8080/orcamento/?dataInicio=${dataInicio}&dataFim=${dataFim}`, { headers });

            // Supondo que a resposta inclua os campos especificados diretamente
            setData(response.data);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDataInicioChange = (event) => {
        setDataInicio(event.target.value);
    };

    const handleDataFimChange = (event) => {
        setDataFim(event.target.value);
    };

    const handleButtonClick = () => {
        fetchData();
    };

    //useEffect(() => {
      //  console.log('Primeiro dia do mês:', dataInicio);
        //console.log('Último dia do mês:', dataFim);
        //fetchData();
    //}, [dataInicio, dataFim]);

    
    {/*useEffect(() => {
        // Definir as datas iniciais, por exemplo, um mês atrás e hoje
       const dataAtual = new Date().toISOString().slice(0, 10); // Data atual no formato ISO (YYYY-MM-DD)

        // Calcular o primeiro dia do mês corrente
        const primeiroDiaMes = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10);

        // Calcular o último dia do mês corrente
        const ultimoDiaMes = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().slice(0, 10);

        console.log('Data atual:', dataAtual);        

        setDataInicio(primeiroDiaMes);
        setDataFim(ultimoDiaMes);

        // Realizar a primeira consulta ao montar o componente
        //fetchData();
    }, []);*/}

    {/*if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }*/}

    const chartData1 = {
        labels: ['Total Gasto Fixo', 'Total Gasto Variável'],
        datasets: [{
            label: 'Orçamento (TOTAL GASTOS)',
            data: [data.totalGastoFixo, data.totalGastoVariavel],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
            ],
            hoverBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    };

    const chartData2 = {
        labels: ['Total Renda Fixa', 'Total Renda Variável'],
        datasets: [{
            label: 'Orçamento (TOTAL RENDA)',
            data: [data.totalRendaFixa, data.totalRendaVAriavel],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
            ],
            hoverBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    };
    

/*    return (
        <div>
            <div>
                <label>Data Início:</label>
                <input type="date" value={dataInicio} onChange={handleDataInicioChange} />
            </div>
            <div>
                <label>Data Fim:</label>
                <input type="date" value={dataFim} onChange={handleDataFimChange} />
            </div>
            <button onClick={handleButtonClick}>Buscar Dados</button>
            <div style={{ width: '500px', height: '500px' }}>
                <Pie data={chartData1} height={200} width={200}/> 
                <Pie data={chartData2} height={200} width={200}/>
            </div>
        </div>      
    );*/

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>Data Início:</label>
                <input 
                    type="date" 
                    value={dataInicio} 
                    onChange={handleDataInicioChange} 
                    style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>Data Fim:</label>
                <input 
                    type="date" 
                    value={dataFim} 
                    onChange={handleDataFimChange} 
                    style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>
            <button type="submit" className="submit-blue-button">Buscar Dados</button>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px' }}>
                    <Pie data={chartData1} height={200} width={200}/> 
                </div>
                <div style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px' }}>
                    <Pie data={chartData2} height={200} width={200}/>
                </div>
            </div>
        </div>      
    );
      
};

export default Orcamento;