// HabitList.jsx
import HabitItem from "./HabitItem"

export default function HabitList({habitosFiltrados,toggleCompletado,eliminarHabito,semanaCompleta}) {
  return (
    <div>
      {habitosFiltrados.map((h, index) => (
        <HabitItem
          key={index}
          habit={h}
          originalIndex={index}
          toggleCompletado={toggleCompletado}
          eliminarHabito={eliminarHabito}
          semanaCompleta={semanaCompleta}
        />
      ))}
    </div>
  )
}