import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
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
import logoDesktop from "../assets/logo.svg";
import logoMobile from "../assets/logo_mobile.png";
import { FiMenu, FiX } from "react-icons/fi";

function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const handleCloseMenu = () => setExpanded(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      return; // Evitar búsqueda vacía
    }
    // Redirigir a la página de resultados de búsqueda
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm(""); // Limpiar el campo de búsqueda
  };

  // Estado para controlar en Offcanvas
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Hook personalizado para obtener las categorías
  const url = "https://dummyjson.com/products/categories";
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="py-2"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        role="navigation"
        aria-label="Navegación principal"
      >
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand as={Link} to="/" style={{ width: "40%" }}>
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

          <div className="d-flex align-items-center gap-3 order-lg-3 mx-lg-4">
            <CartWidget
              onClick={handleShow}
              aria-label="Ver carrito de compras"
            />
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              aria-label="Alternar menú de navegación"
              className="ms-2 d-lg-none"
            >
              {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="navbarScroll" className="order-lg-2 w-100">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 gap-3 ms-3">
              <Nav
                className="d-flex flex-column flex-lg-row align-items-center gap-3"
                role="menubar"
                aria-label="Enlaces de navegación"
              >
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
                        onClick={handleCloseMenu}
                        role="menuitem"
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
                  onClick={handleCloseMenu}
                >
                  Contacto
                </Nav.Link>
              </Nav>

              <Form className="d-flex w-100 w-auto" onSubmit={handleSearch}>
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" variant="outline-success">
                  Buscar
                </Button>
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
