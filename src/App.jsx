import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('')

  return (
    <>
      <div>
        <input type="text" placeholder='Digite o cep' onChange={evento => setCep(evento.target.value)} />
      </div>
    </>
  )
}

export default App
