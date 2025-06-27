import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProductDetailPage() {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.fromPage || "/";

  console.log(product);
  if (loading) {
    return <Spinner message="Cargando Producto..." />;
  }
  if (error) {
    return <p>Error al cargar el producto: {error.message}</p>;
  }
  if (!product) {
    return <p>No hay producto disponible.</p>;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Novashade</title>
        <meta
          name="description"
          content={`Detalles del producto: ${product.title}. Precio: $${product.price}.`}
        />
      </Helmet>

      <Header />
      <Container className="my-5 flex-grow-1 d-flex align-items-center justify-content-center">
        <Row className="justify-content-center flex-grow-1">
          <Col lg={10}>
            <Card className="border-0 shadow p-3">
              <Row className="g-3 align-items-center">
                <Col md={6} className="text-center">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fluid
                    rounded
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </Col>
                <Col md={6} className="text-center">
                  <header>
                    <h1 className="mb-3">{product.title}</h1>
                  </header>
                  <p className="text-muted fs-5">{product.description}</p>
                  <h2 className="text-success fw-bold mb-4">
                    Precio: ${product.price}
                  </h2>
                  <Form.Group className="mb-3" controlID="productQty">
                    <Row className="align-items-center justify-content-center">
                      <Col xs="auto">
                        <Form.Label className="mb-0">Cantidad</Form.Label>
                      </Col>
                      <Col xs="auto">
                        <Form.Control
                          type="number"
                          min={1}
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Button
                    variant="success"
                    size="lg"
                    className="w-100"
                    onClick={() => addToCart(product, quantity)}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Agregar al Carrito
                  </Button>
                  <Button
                    className="w-100 my-3"
                    variant="info"
                    onClick={() => navigate(fromPage)}
                  >
                    Volver
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
