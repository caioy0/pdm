import React, { useEffect, useState } from 'react'

const App = () => {
  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)
  
  useEffect(()=> {
    console.log('Funcao de efeito colateral executou sem vetor')
  })
  useEffect(()=>{
    console.log('Funcao de efeito colateral executou com um vetor vazio')
  },[])

  useEffect(()=>{
    console.log('Funcao de efeito colateral executou. Dependencia: texto')
  },[texto])

  useEffect(()=>{
    console.log('Funcao de efeito colateral executou. Dependencia: contador')
  },[contador])
  
  return (
    <div style={{padding: 20, borderColor: 'black', borderWidth: 1, 
        borderStyle: 'solid', borderRadius: 8}}>
      <h2>Efeitos colaterais</h2>
      <div>
        <input 
          style={{padding: 8}}
          type="text" 
          value={texto}
          onChange={(e)=> setTexto(e.target.value)}
          placeholder="Digite algo" />
      </div>
      <div style={{marginTop: 12}}>
        <button
        onClick={()=>setContador(contador+1)}>
          Contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App