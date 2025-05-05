import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

export default function CategoriesPage() {
  const { categoryName } = useParams();
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

  const url = `https://dummyjson.com/products/category/${categorySlug}`;

  return (
    <>
      <Header></Header>
      <NavbarComponent></NavbarComponent>
      <ProductList url={url} title={categoryName} />;<Footer></Footer>
    </>
  );
}
