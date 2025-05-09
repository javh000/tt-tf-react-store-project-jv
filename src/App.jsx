import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import DealPage from "./pages/DealPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

const url = "https://dummyjson.com/products/";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/deals" element={<DealPage url={url} />} />
      </Routes>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}

export default App;
