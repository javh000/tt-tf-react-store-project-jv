import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
