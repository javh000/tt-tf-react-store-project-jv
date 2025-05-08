import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner";
import useFetch from "../components/hooks/useFetch";
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

export default function ProductDetailPage() {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

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
      <Header />
      <main className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-4">
                <Row className="g-4 align-items-center">
                  <Col md={6} className="text-center">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fluid
                      rounded
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={6}>
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
                      variant="primary"
                      size="lg"
                      className="w-100"
                      onClick={() => addToCart(product, quantity)}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Agregar al Carrito
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
