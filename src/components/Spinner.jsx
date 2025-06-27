export default function Spinner({ message = "Cargando..." }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Spinner visual */}
      {/* aria-live="polite" indica que el mensaje es importante pero no urgente */}
      {/* aria-busy="true" indica que la página está en proceso de carga */}
      <div
        className="spinner-border text-primary mb-3"
        style={{ width: "4rem", height: "4rem" }}
      ></div>
      <p>{message}</p>
    </div>
  );
}
