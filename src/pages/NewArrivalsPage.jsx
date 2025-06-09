import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";

export default function NewArrivalsPage({ url }) {
  const { data, loading, error } = useFetch(url);

  const newProducts = data?.products?.slice(-20) || [];

  return (
    <>
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
