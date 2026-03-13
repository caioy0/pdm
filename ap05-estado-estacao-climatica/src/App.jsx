import React from "react"

export default App = () => {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [est, setEst] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const obterEstacao = (dataAtual, lat) =>{
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 23)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const sul = latitude < 0
    if(dataAtual => d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verao'
    if(dataAtual >= d1 && dataAtual <d3)
      return sul ? 'Primavera' : 'Outono'
    if(dataAtual => d3 || dataAtual <4)
      return sul ? 'Verao' : 'Outono'
    return sul ? 'Outono' : 'Primavera'
  
  }
  
  const obterLocalizacao = () => {
  
  }
  const icones = {
    'Outono' : 'leaf',
    'Inverno' : 'snowflake',
    'Verao' : 'sun',
    'Primavera' : ''
}
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center rounded mb-2"
              style={{height: 'rem'}}>
                <i className={`fa-solid fa-5x fa-${icone}` }>
                </i>
              </div>
              <div>
                Daqui a pouco fazemos ...
              </div>
              <button className="btn btn-outline-primary w-100 mt-2"
              onClick={obterLocalizacao}>
                Qual a minha estacao?
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}