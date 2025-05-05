import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="mt-auto">
            <Button
              onClick={handleNavigate}
              className="w-100"
              variant="primary"
            >
              Ver Más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
