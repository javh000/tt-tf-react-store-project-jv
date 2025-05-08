import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import CategoriesPage from "./pages/CategoriesPage";
import DealPage from "./pages/DealPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";

const url = "https://dummyjson.com/products/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:categoryName" element={<CategoriesPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/deals" element={<DealPage url={url}/>} />
    </Routes>
  );
}

export default App;
