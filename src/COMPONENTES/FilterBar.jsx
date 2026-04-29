export default function FilterBar({ filtro, setFiltro, comenzarNuevaSemana }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "12px" }}>
        <button
          onClick={() => setFiltro("TODOS")}
          style={{
            backgroundColor: filtro === "TODOS" ? "#34495e" : "#ecf0f1",
            color: filtro === "TODOS" ? "white" : "black"
          }}
        >
          Todos
        </button>

        <button
          onClick={() => setFiltro("PENDIENTES")}
          style={{
            backgroundColor: filtro === "PENDIENTES" ? "#34495e" : "#ecf0f1",
            color: filtro === "PENDIENTES" ? "white" : "black"
          }}
        >
          Pendientes hoy
        </button>

        <button
          onClick={() => setFiltro("COMPLETADOS")}
          style={{
            backgroundColor: filtro === "COMPLETADOS" ? "#34495e" : "#ecf0f1",
            color: filtro === "COMPLETADOS" ? "white" : "black"
          }}
        >
          Completados hoy
        </button>
      </div>

      <button
        onClick={comenzarNuevaSemana}
        style={{
          backgroundColor: "#e67e22",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          width: "100%"
        }}
      >
        🔄 Comenzar nueva semana
      </button>
    </div>
  )
}