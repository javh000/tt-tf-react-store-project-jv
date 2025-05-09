import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "admin" && password === "123") {
      localStorage.setItem("user", JSON.stringify({ user, role: "admin" }));
      navigate("/dashboard");
    } else if (user === "cliente" && password === "123") {
      localStorage.setItem("user", JSON.stringify({ user, role: "cliente" }));
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Iniciar sesión</h2>

      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUser" className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu usuario (admin o cliente)"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-4">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña: 123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100 mb-3">
          Iniciar sesión
        </Button>

        <Link to="/">
          <Button variant="primary" className="w-100">
            Volver a la página de inicio
          </Button>
        </Link>
      </Form>
    </Container>
  );
}

export default LoginPage;
