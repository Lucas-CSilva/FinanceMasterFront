import React, { useState } from 'react';
import RendaFixa from './RendaFixa';
import RendaVariavel from './RendaVariavel';
import ListRendaFixa from './ListRendaFixa';
import ListRendaVariavel from './ListRendaVariavel';

function CadastroRenda() {
  const [tipoRenda, setTipoRenda] = useState(''); // Estado para controlar o tipo de gasto selecionado

  const handleSelecionarRenda = (tipo) => {
    setTipoRenda(tipo); // Atualiza o estado com o tipo de gasto selecionado
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Selecionar Tipo de Renda</h2>
        <div className="btn-group mt-3">
          <button
            className={`btn ${tipoRenda === 'fixa' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelecionarRenda('fixa')}
          >
            Renda Fixa
          </button>
          <button
            className={`btn ${tipoRenda === 'variavel' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelecionarRenda('variavel')}
          >
            Renda Variável
          </button>
        </div>
      </div>
      
      {/* Renderização condicional do formulário com base no tipo de gasto selecionado */}
      {tipoRenda === 'fixa' && <ListRendaFixa />}
      {tipoRenda === 'variavel' && <ListRendaVariavel />}
    </div>
  );
}

export default CadastroRenda;
