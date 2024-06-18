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
function AddContaBancaria(props){

    const [nome, setNome] = useState("")
    const [banco, setBanco] = useState("")
    const [numero, setNumero] = useState("")
    
    const handleSubmit = async (e) => {
        const request_body = {
            "nome": nome,
            "banco": banco,
            "numero": numero
        }

        setNome("")
        setBanco("")
        setNumero("")

        try {
            let token = localStorage.getItem('token')
            const header = {
              "Content-Type" : "application/json",
              "Authorization": "Bearer " + token
            }
            
            const response = await axios.post("http://localhost:8080/contaBancaria/insert", 
            request_body,
            {
              headers: header
            }
            );
            console.log("conta successful!", response.data);
            // Optionally, you can redirect the user to another page or show a success message here
        } catch (error) {
            console.error("Error conta:", error);
            // Handle error appropriately, e.g., display an error message to the user
        }
    };   

  return (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Cadastrar conta bancária</h2>
    <form className="mx-auto" style={{ maxWidth: '400px' }}>
      <div className="form-group mb-3">
        <label htmlFor="name-field" className="form-label">Nome da conta:</label>
        <input
          id="name-field"
          className="form-control"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="bank-field" className="form-label">Banco:</label>
        <input
          id="bank-field"
          className="form-control"
          type="text"
          value={banco}
          onChange={(e) => setBanco(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="number-field" className="form-label">Número da conta:</label>
        <input
          id="number-field"
          className="form-control"
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
      </div>
      <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Adicionar</button>
    </form>
  </div>

  )
}

export default AddContaBancaria;