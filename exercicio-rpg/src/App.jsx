import React, { useState } from "react";
import CardPersonagem from "./CardPersonagem";

const App = () => {
  const [nivel, setNivel] = useState(0);
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Criação de Personagem</h1>

      <div className="card p-3 mb-4">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Classe</label>
          <select
            className="form-select"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="soldier">Guerreiro</option>
            <option value="mage">Mago</option>
            <option value="archer">Arqueiro</option>
            <option value="healer">Curandeiro</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-primary"
            onClick={() => setNivel((prev) => prev + 1)}
          >
            Incrementar <i className="fas fa-plus"></i>
          </button>

          <button
            className="btn btn-danger"
            onClick={() => setNivel((prev) => Math.max(prev - 1, 0))}
          >
            Decrementar <i className="fas fa-minus"></i>
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setNivel(0)}
          >
            Reiniciar
          </button>
        </div>
      </div>

      <CardPersonagem
        nome={nome}
        classe={classe}
        nivel={nivel}
      />
    </div>
  );
};

export default App;