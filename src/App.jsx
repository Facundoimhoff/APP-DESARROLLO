import './App.css'
import React, { useState, useEffect } from 'react'
import HabitForm from './COMPONENTES/HabitForm';
import FilterBar from "./COMPONENTES/FilterBar";
import HabitList from './COMPONENTES/HabitList';

function App() {
  const [habito, setHabito] = useState("")
  const [dias, setDias] = useState([false, false, false, false, false, false, false])
  const [filtro, setFiltro] = useState("TODOS")

  const [habitos, setHabitos] = useState(() => {
    const habitosGuardados = localStorage.getItem("daitra_habitos")
    return habitosGuardados ? JSON.parse(habitosGuardados) : []
  })

  useEffect(() => {
    localStorage.setItem("daitra_habitos", JSON.stringify(habitos))
  }, [habitos])

  const obtenerFechaActual = () => {
    const fecha = new Date()
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' }
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones)
    return fechaFormateada.replace(/ de (\d{4})$/, ", $1")
  }

  const obtenerIndiceHoy = () => {
    const hoy = new Date().getDay()
    return hoy === 0 ? 6 : hoy - 1
  }

  const hoyIndex = obtenerIndiceHoy()

  const toggleDia = (index) => {
    const nuevosDias = [...dias]
    nuevosDias[index] = !nuevosDias[index]
    setDias(nuevosDias)
  }

  const guardarHabito = () => {
    if (habito.trim() === "") return

    setHabitos([
      ...habitos,
      {
        nombre: habito.trim(),
        dias: dias,
        completado: [false, false, false, false, false, false, false]
      }
    ])

    setHabito("")
    setDias([false, false, false, false, false, false, false])
  }

  const toggleCompletado = (habitIndex, diaIndex) => {
    const nuevosHabitos = [...habitos]
    nuevosHabitos[habitIndex].completado[diaIndex] = !nuevosHabitos[habitIndex].completado[diaIndex]
    setHabitos(nuevosHabitos)
  }

  const eliminarHabito = (indexBuscado) => {
    const nuevaLista = habitos.filter((_, index) => index !== indexBuscado)
    setHabitos(nuevaLista)
  }

  const comenzarNuevaSemana = () => {
    if (window.confirm("¿Resetear semana?")) {
      setHabitos(habitos.map(h => ({ ...h, completado: Array(7).fill(false) })))
    }
  }

  const semanaCompleta = (h) => {
    const diasObjetivo = h.dias
      .map((d, i) => (d ? i : null))
      .filter(i => i !== null)

    return diasObjetivo.length > 0 && diasObjetivo.every(i => h.completado[i])
  }

  const habitosFiltrados = habitos.filter(h => {
    if (filtro === "PENDIENTES") {
      return h.dias[hoyIndex] && !h.completado[hoyIndex]
    }
    if (filtro === "COMPLETADOS") {
      return h.dias[hoyIndex] && h.completado[hoyIndex]
    }
    return true
  })

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>DAITRA</h1>
      <h3 style={{ color: "#666" }}>{obtenerFechaActual()}</h3>

      <HabitForm
        habito={habito}
        setHabito={setHabito}
        dias={dias}
        toggleDia={toggleDia}
        guardarHabito={guardarHabito}
      />

      <FilterBar
        filtro={filtro}
        setFiltro={setFiltro}
        comenzarNuevaSemana={comenzarNuevaSemana}
      />

      <HabitList
        habitosFiltrados={habitosFiltrados}
        habitos={habitos}
        toggleCompletado={toggleCompletado}
        eliminarHabito={eliminarHabito}
        semanaCompleta={semanaCompleta}
      />
    </div>


  )
}

export default App