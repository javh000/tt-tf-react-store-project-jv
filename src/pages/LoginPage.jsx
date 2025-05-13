import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userInput === "admin" && password === "123") {
      login({ user: "admin", role: "admin", token: "admin-token" });
      navigate("/dashboard");
    } else if (userInput === "cliente" && password === "123") {
      login({ user: "cliente", role: "cliente", token: "client-token" });
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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
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
          <Button variant="info" className="w-100">
            Volver a la página de inicio
          </Button>
        </Link>
      </Form>
    </Container>
  );
}

export default LoginPage;
