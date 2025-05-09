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
import CartLoginGroup from "./CartLoginGroup";

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
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="200" alt="Novashade Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <div className="d-flex d-lg-none gap-3 align-items-center ms-5">
            <CartWidget onClick={handleShow} />
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </div> */}
          <CartLoginGroup onclick={handleShow}
            className={"d-flex d-lg-none gap-3 align-items-center ms-5"}
          />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex w-100 align-items-center gap-3 flex-column flex-lg-row">
              <Nav navbarScroll>
                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                  <div
                    style={{
                      maxHeight: "400px",
                      overflowY: "auto",
                    }}
                  >
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
                <Nav.Link as={Link} to="/" className="me-2">
                  Productos
                </Nav.Link>
                <Nav.Link as={Link} to="/deals" className="me-2">
                  Ofertas
                </Nav.Link>
                <Nav.Link as={Link} to="/new-arrivals" className="me-2">
                  Novedades
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="footer"
                  smooth={true}
                  duration={1000}
                  className="me-2"
                  style={{ cursor: "pointer" }}
                >
                  Contacto
                </Nav.Link>
              </Nav>

              <Form className="d-flex w-100 mb-3 mb-lg-0">
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
          {/* <div className="d-none d-lg-flex gap-3 align-items-center ms-5">
            <CartWidget onClick={handleShow} />
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </div> */}
          <CartLoginGroup onclick={handleShow}
            className={"d-none d-lg-flex gap-3 align-items-center ms-5"}
          />
        </Container>
      </Navbar>
      <CartOffcanvas show={showCart} handleClose={handleClose} />
    </>
  );
}

export default NavbarComponent;
