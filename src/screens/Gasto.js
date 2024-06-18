import React, { useState } from 'react';
import GastoFixo from './GastoFixo';
import GastoVariavel from './GastoVariavel';
import ListGastoFixo from './ListGastoFixo';
import ListGastoVariavel from './ListGastoVariavel';

function CadastroGasto() {
  const [tipoGasto, setTipoGasto] = useState(''); // Estado para controlar o tipo de gasto selecionado

  const handleSelecionarGasto = (tipo) => {
    setTipoGasto(tipo); // Atualiza o estado com o tipo de gasto selecionado
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Selecionar Tipo de Gasto</h2>
        <div className="btn-group mt-3">
          <button
            className={`btn ${tipoGasto === 'fixo' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelecionarGasto('fixo')}
          >
            Gasto Fixo
          </button>
          <button
            className={`btn ${tipoGasto === 'variavel' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelecionarGasto('variavel')}
          >
            Gasto Variável
          </button>
        </div>
      </div>
      
      {/* Renderização condicional do formulário com base no tipo de gasto selecionado */}
      {tipoGasto === 'fixo' && <ListGastoFixo />}
      {tipoGasto === 'variavel' && <ListGastoVariavel />}
    </div>
  );
}

export default CadastroGasto;
