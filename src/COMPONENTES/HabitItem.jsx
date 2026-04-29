export default function HabitItem({habit,originalIndex,toggleCompletado,eliminarHabito,semanaCompleta}) {
  const esPerfecto = semanaCompleta(habit)

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        borderRadius: "10px",
        border: esPerfecto ? "2px solid gold" : "1px solid #ccc",
        backgroundColor: esPerfecto ? "#fffef0" : "white"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>{habit.nombre}</h3>

        <button
          onClick={() => eliminarHabito(originalIndex)}
          style={{
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px"
          }}
        >
          Eliminar
        </button>
      </div>

      {esPerfecto && (
        <p style={{ color: "#d4af37", fontWeight: "bold" }}>
          ¡HAS DESBLOQUEADO UNA RACHA! 🏆
        </p>
      )}

      <div style={{ marginTop: "10px" }}>
        {["L", "M", "X", "J", "V", "S", "D"].map((letra, i) => (
          habit.dias[i] && (
            <button
              key={i}
              onClick={() => toggleCompletado(originalIndex, i)}
              style={{
                margin: "3px",
                backgroundColor: habit.completado[i] ? "#2ecc71" : "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px"
              }}
            >
              {letra}
            </button>
          )
        ))}
      </div>
    </div>
  )
}