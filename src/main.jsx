import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
      <Router>
        <App />
      </Router>
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
