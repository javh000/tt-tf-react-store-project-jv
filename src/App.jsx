import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import DealPage from "./pages/DealPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SearchResultPage from "./pages/SearchResultsPage";
import "./App.css";

const url = "https://dummyjson.com/products/";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Routes>
        <Route path="/" element={<Home url={url} />} />
        <Route path="/products" element={<Home url={url} />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/deals" element={<DealPage url={url} />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage url={url} />} />
        <Route path="/search" element={<SearchResultPage url={url} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home url={url} />} />
      </Routes>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}

export default App;
