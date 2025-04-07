export default function Spinner({ message = "Cargando..." }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary mb-3" style={{width: "4rem", height: "4rem"}} role="status">
      </div>
      <p>{message}</p>
    </div>
  );
}
