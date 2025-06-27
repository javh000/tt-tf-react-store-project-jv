import { Badge, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext.jsx";
import { ShoppingCart } from "lucide-react";

export default function CartWidget({ onClick }) {
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Button
      variant="light"
      onClick={onClick}
      className="position-relative"
      aria-label={`Mostrar carrito con ${totalQty} ${
        totalQty === 1 ? "producto" : "productos"
      }`}
    >
      <ShoppingCart size={24} />
      {totalQty > 0 && (
        <Badge
          pill
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {totalQty}
        </Badge>
      )}
    </Button>
  );
}
