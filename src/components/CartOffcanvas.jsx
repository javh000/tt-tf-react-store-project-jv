import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext.jsx";

export default function CartOffcanvas({ show, handleClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      aria-label="Carrito de compras"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.title}</strong> x {item.quantity}
                </div>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Eliminar ${item.title} del carrito`}
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <Button
          variant="danger"
          className="mt-3"
          onClick={clearCart}
          aria-label="Vaciar el carrito"
        >
          Vaciar Carrito
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
