import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      Swal.fire({
        icon: "error",
        title: "Email no válido",
        text: "Por favor ingresa un email válido",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Gracias por suscribirte",
      text: "Te hemos agregado a nuestra lista. Te enviamos un email para confirmar tu dirección.",
      confirmButtonText: "Aceptar",
    });

    setEmail("");
  };

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Suscríbete al boletín</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="newsletterEmail" className="d-flex flex-column align-items-center">
                <Form.Control
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="mb-2 w-auto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  Subscribirse
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Datos de contacto</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0 px-0">
                Dirección: Calle Ejemplo, Ciudad, País
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 px-0">
                Teléfono: +123 456 7890
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 px-0">
                Email: contacto@tuempresa.com
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={4}>
            <h5>Redes Sociales</h5>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
