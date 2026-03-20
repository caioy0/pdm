function CardPersonagem({ nome = "Sem nome", classe, nivel = 0 }) {
  const classesConfig = {
    soldier: {
      label: "Guerreiro",
      icone: "fa-shield-alt",
      cor: "#B43232",
    },
    mage: {
      label: "Mago",
      icone: "fa-hat-wizard",
      cor: "#5032B4",
    },
    archer: {
      label: "Arqueiro",
      icone: "fa-bullseye",
      cor: "#329632",
    },
    healer: {
      label: "Curandeiro",
      icone: "fa-hand-holding-heart",
      cor: "#C8A020",
    },
  };

  const config = classesConfig[classe] || {
    label: "Desconhecido",
    icone: "fa-question",
    cor: "#999",
  };

  const porcentagem = Math.min((nivel / 20) * 100, 100);

  return (
    <div className="card" style={{ borderColor: config.cor }}>
      <div className="card-body text-center">
        <i
          className={`fas ${config.icone} fa-4x mb-3`}
          style={{ color: config.cor }}
        />

        <h3>{nome}</h3>
        <p className="text-muted">{config.label}</p>
        <p>Nível {nivel}</p>

        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            style={{
              width: `${porcentagem}%`,
              backgroundColor: config.cor,
            }}
          >
            {Math.round(porcentagem)}%
          </div>
        </div>

        <small className="text-muted">
          {nivel} / 20
        </small>
      </div>
    </div>
  );
}

export default CardPersonagem;