import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();

  const handleNavigate = () => {
    // Capturar ruta + querystring actuales
    const fromPage = location.pathname + location.search;
    navigate(`/products/${product.id}`, { state: { fromPage } });
  };

  return (
    <div className="col-md-4 mb-4" role="region" aria-label={`Producto: ${product.title}`}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="mt-auto d-grid gap-2">
            <Button variant="success" onClick={() => addToCart(product)} aria-label={`Agregar ${product.title} al carrito`}>
              Agregar al carrito
            </Button>
            <Button variant="info" onClick={handleNavigate} aria-label={`Ver detalles de ${product.title}`}>
              Ver
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
