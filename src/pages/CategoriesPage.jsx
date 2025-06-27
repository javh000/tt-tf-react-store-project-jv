import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function CategoriesPage() {
  const { categoryName } = useParams();
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

  const url = `https://dummyjson.com/products/category/${categorySlug}`;
  const { data, loading, error } = useFetch(url);
  const categoryProducts = data?.products || [];

  return (
    <>
      <Helmet>
        <title>{categoryName} | Novashade</title>
        <meta
          name="description"
          content={`Explora nuestra colección de ${categoryName}.`}
        />
      </Helmet>
      
      <Header />
      <ProductList
        products={categoryProducts}
        loading={loading}
        error={error}
        title={categoryName}
      />
      <Footer />
    </>
  );
}
