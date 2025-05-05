import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import CartOffcanvas from "./CartOffcanvas";

function NavbarComponent() {
  // Estado para controlar en Offcanvas
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Hook personalizado para obtener las categorías
  const url = "https://dummyjson.com/products/categories";
  const { data, loading, error } = useFetch(url);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las categorías: {error.message}</p>;
  if (!data?.length) return <p>No hay categorías disponibles.</p>;

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E-commerce
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 align-items-center gap-3">
            <Nav>
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                {data.map((category) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`/categories/${category.name}`}
                    key={category.name}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={Link} to="/" className="me-2">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/deals" className="me-2">
                Ofertas
              </Nav.Link>
              <Nav.Link as={Link} to="/new" className="me-2">
                Novedades
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="me-2">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="me-2">
                Nosotros
              </Nav.Link>
            </Nav>

            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <CartWidget onClick={handleShow} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartOffcanvas show={showCart} handleClose={handleClose} />
    </>
  );
}

export default NavbarComponent;
