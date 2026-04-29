export default function HabitForm({habito,setHabito,dias,toggleDia,guardarHabito}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Nuevo hábito"
        value={habito}
        onChange={(e) => setHabito(e.target.value)}
      />

      <button onClick={guardarHabito} style={{ marginLeft: "10px" }}>
        Guardar
      </button>

      <div style={{ margin: "15px 0" }}>
        {["L", "M", "X", "J", "V", "S", "D"].map((letra, index) => (
          <button
            key={index}
            onClick={() => toggleDia(index)}
            style={{
              margin: "2px",
              backgroundColor: dias[index] ? "#27ae60" : "#bdc3c7",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px"
            }}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  )
}