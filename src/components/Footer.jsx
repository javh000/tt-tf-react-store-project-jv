import { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import SocialLinks from "./SocialLinks.jsx";
import { Element } from "react-scroll";

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
        heightAuto: false,
        scrollbarPadding: false,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Gracias por suscribirte",
      text: "Te hemos agregado a nuestra lista. Te enviamos un email para confirmar tu dirección.",
      confirmButtonText: "Aceptar",
      heightAuto: false,
      scrollbarPadding: false,
    });

    setEmail("");
  };

  return (
    <Element name="footer">
      <footer className="bg-dark text-light py-3" role="contentinfo">
        <Container>
          <Row className="text-center align-items-center flex-column flex-md-row gap-3 gap-md-0">
            <Col md={4} className="mb-2 mb-md-0">
              <h5 className="mb-2">Redes</h5>
              <SocialLinks />
            </Col>

            <Col md={4} className="mb-2 mb-md-0">
              <h5 className="mb-2">Contacto</h5>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-light border-0 px-0 py-1">
                  Dirección: Avenida Siempreviva 742
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-light border-0 px-0 py-1">
                  Teléfono: +54 11 123 456 78
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-light border-0 px-0 py-1">
                  Email: contacto@Novashade.com
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={4} className="mb-2 mb-md-0">
              <h5 className="mb-2">Suscríbete al newsletter</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  controlId="newsletterEmail"
                  className="d-flex flex-column flex-lg-row align-items-center gap-2"
                >
                  <Form.Control
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-100 w-md-auto mb-2 mb-md-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Correo electrónico para suscribirse al newsletter"
                    required
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 w-md-auto"
                    aria-label="Enviar suscripción al newsletter"
                    disabled={!email.trim()}
                  >
                    Subscribirse
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
    </Element>
  );
}
