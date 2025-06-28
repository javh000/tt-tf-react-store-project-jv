import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiMenu, FiX} from "react-icons/fi";

import logoDesktop from "../assets/logo.svg";
import logoMobile from "../assets/logo_mobile.png";

function NavbarDashboard() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("auth");
    if (raw) {
      try {
        const { user } = JSON.parse(raw);
        setUserName(user ?? "Usuario");
      } catch {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="md"
      fixed="top"
      className="py-2"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      role="navigation"
      aria-label="Navegación del panel de administración"
    >
      <Container fluid className="d-flex align-items-center">

        {/* BRAND: logo desktop / logo mobile */}
        <Navbar.Brand href="/" className="p-0 me-3">
          <img
            src={logoDesktop}
            alt="Logo Desktop"
            className="d-none d-md-block"
            style={{ height: "40px", objectFit: "contain" }}
          />
          <img
            src={logoMobile}
            alt="Logo Mobile"
            className="d-block d-md-none"
            style={{ height: "32px", objectFit: "contain" }}
          />
        </Navbar.Brand>

        {/* Título siempre visible */}
        <h2 className="fs-5 mb-0 flex-grow-1 text-center text-md-end">
          Panel de administración
        </h2>

        {/* Toggle sólo aparece < md */}
        <Navbar.Toggle aria-label="Menú de administración">
          {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
        </Navbar.Toggle>

        {/* Aquí van usuario + logout, colapsados en móvil */}
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center my-2 gap-3">
            <Nav.Item className="me-2">
              <span className="text-dark">{`Bienvenido: ${userName}`}</span>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDashboard;