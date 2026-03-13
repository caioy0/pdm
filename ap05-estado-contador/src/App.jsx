// rafce
// hook
import React, { useState } from "react"

const App = () => {
  const [contador, setContador] = useState (0)
  return(
    <div style={{textAlign: 'center', marginTop: 50}}>
      <h1>
        Meu contador : {contador}
      </h1>
      <button
        onClick={()=> setContador(contador+1)}
        style={{padding:4}}>
        Incrementar
      </button>
      <button
      onClick={()=> setContador(contador-1)}
      style={{padding: 4}}>
      Decrementar
      </button>
      <button style={{padding: 4}} 
      onClick={()=> setContador(0)}>
        Reiniciar
        </button>
    </div>
  )
}

export default App