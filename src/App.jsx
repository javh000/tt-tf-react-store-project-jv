import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
