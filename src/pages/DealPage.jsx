import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";

export default function DealPage({ url }) {
  const { data, loading, error } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return (
    <>
      <Header />
      <ProductList
        title="Ofertas"
        products={deals}
        loading={loading}
        error={error}
      />
      <Footer />
    </>
  );
}
