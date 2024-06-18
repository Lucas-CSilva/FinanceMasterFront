import { useState } from 'react'; 
import axios from "axios";
/*
{
  name:
  price:
  type:
  brand:
}
*/
function AddCartao(props){

    const [name, setName] = useState("")
    const [limite, setLimite] = useState(0)
    const [desc, setDesc] = useState("")
    
    const handleSubmit = async (e) => {
        const request_body = {
            "nome": name,
            "limite": limite,
            "desc": desc
        }

        setName("")//nome
        setLimite(0)//limite
        setDesc("")//descricao

        try {
            const response = await axios.post("http://localhost:8080/cartao/insert", 
            request_body
            );
            console.log("Cartao successful!", response.data);
            // Optionally, you can redirect the user to another page or show a success message here
        } catch (error) {
            console.error("Error cartao:", error);
            // Handle error appropriately, e.g., display an error message to the user
        }
    };   

  return (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Adicionar cartão</h2>
    <form className="mx-auto" style={{ maxWidth: '400px' }}>
      <div className="form-group mb-3">
        <label htmlFor="name-field" className="form-label">Nome do cartão:</label>
        <input
          id="name-field"
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="price-field" className="form-label">Limite:</label>
        <input
          id="price-field"
          className="form-control"
          type="number"
          value={limite}
          onChange={(e) => setLimite(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="type-field" className="form-label">Tipo do cartão:</label>
        <select
          id="type-field"
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required>
          <option value="">Selecionar o tipo</option>
          <option value="Crédito">Crédito</option>
          <option value="Débito">Débito</option>
          <option value="Vale alimentação/refeição">Vale alimentação/refeição</option>
          <option value="Vale transporte">Vale transporte</option>
        </select>
      </div>
    <button type="button" className="btn btn-success w-100" onClick={handleSubmit}>Adicionar</button>
    </form>
  </div>

  )
}

export default AddCartao;