import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function CategoriesPage() {
  const { categoryName } = useParams();
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

  const url = `https://dummyjson.com/products/category/${categorySlug}`;

  return <ProductList url={url} title={categoryName} />;
}
