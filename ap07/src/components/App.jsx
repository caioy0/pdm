import React from 'react'
import Busca from './Busca'

const App = () => {
  return (
    <div className="grid justify-content-center mauto w-9 border-round border-1 border-400">\
      <div className='col-12'>
        <h1>Exibir imagens de...</h1>
      </div>
      <div>
        <Busca></Busca>
      </div>
    </div>
  )
}

export default App