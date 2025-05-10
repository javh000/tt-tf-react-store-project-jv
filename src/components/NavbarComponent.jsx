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
import { Link as ScrollLink } from "react-scroll";
import CartWidget from "./CartWidget";
import CartOffcanvas from "./CartOffcanvas";
import logo from "../assets/logo.svg";

function NavbarComponent() {
  // Estado para controlar en Offcanvas
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Hook personalizado para obtener las categorías
  const url = "https://dummyjson.com/products/categories";
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="py-2">
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Novashade Logo" className="img-fluid logo-size" />
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-3 order-lg-3 mx-lg-4">
            <CartWidget onClick={handleShow} />
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="ms-2 d-lg-none"
            />
          </div>

          <Navbar.Collapse id="navbarScroll" className="order-lg-2 w-100">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 gap-3 ms-3">
              <Nav className="d-flex flex-column flex-lg-row align-items-center gap-3">
                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                  <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                    {loading && (
                      <NavDropdown.Item>Cargando...</NavDropdown.Item>
                    )}
                    {error && (
                      <NavDropdown.Item>
                        Error al cargar categorías
                      </NavDropdown.Item>
                    )}
                    {data?.length === 0 && (
                      <NavDropdown.Item>
                        No hay categorías disponibles
                      </NavDropdown.Item>
                    )}
                    {data?.map((category) => (
                      <NavDropdown.Item
                        as={Link}
                        to={`/categories/${category.name}`}
                        key={category.name}
                      >
                        {category.name}
                      </NavDropdown.Item>
                    ))}
                  </div>
                </NavDropdown>

                <Nav.Link as={Link} to="/">
                  Productos
                </Nav.Link>
                <Nav.Link as={Link} to="/deals">
                  Ofertas
                </Nav.Link>
                <Nav.Link as={Link} to="/new-arrivals">
                  Novedades
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="footer"
                  smooth={true}
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  Contacto
                </Nav.Link>
              </Nav>

              <Form className="d-flex w-100 w-auto">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartOffcanvas show={showCart} handleClose={handleClose} />
    </>
  );
}

export default NavbarComponent;
