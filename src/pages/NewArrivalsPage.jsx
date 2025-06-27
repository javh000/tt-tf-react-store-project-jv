import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet-async";

export default function NewArrivalsPage({ url }) {
  const { data, loading, error } = useFetch(url);

  const newProducts = data?.products?.slice(-20) || [];

  return (
    <>
      <Helmet>
        <title>Novedades | Novashade</title>
        <meta
          name="description"
          content="Descubre las últimas novedades en nuestra tienda."
        />
      </Helmet>

      <Header />
      <ProductList
        title="Novedades"
        products={newProducts}
        loading={loading}
        error={error}
      />
      <Footer />
    </>
  );
}
