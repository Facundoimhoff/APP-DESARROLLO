import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [habito, setHabito] = useState("")
  const [habitos, setHabitos] = useState([])

  const agregarHabito = () => {
    if (habito === "") return

    setHabitos([
      ...habitos,
      {
        nombre: habito,
        dias: [false, false, false, false, false, false, false]
      }
    ])

    setHabito("")
  }

  const toggleDia = (indexHabito, indexDia) => {
    const nuevosHabitos = [...habitos]

    nuevosHabitos[indexHabito].dias[indexDia] =! nuevosHabitos[indexHabito].dias[indexDia]

    setHabitos(nuevosHabitos)
  }

    
              
    








 return (
  
  <div>

    <h1>DAITRA</h1>

    <input
      type="text"
      value={habito}
      onChange={(e) => setHabito(e.target.value)}

      typeC="checkbox"
      checked={dia}
      onChangeC={() => toggleDia(indexHabito, indexDia)}
    />

    
    <button onClick={agregarHabito}>
      Agregar hábito
    </button>

    <ul>
  {habitos.map((h, indexHabito) => (
    <li key={indexHabito}>
      <p>{h.nombre}</p>

      {h.dias.map((dia, indexDia) => (
        <label key={indexDia}>
          <input
            type="checkbox"
            checked={dia}
          />
          {["L", "M", "X", "J", "V", "S", "D"][indexDia]}
        </label>
      ))}
    </li>
  ))}
</ul>
  </div>
)
}

export default App
