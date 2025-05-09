import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";

export default function NewArrivalsPage({ url }) {
  const { data } = useFetch(url);

  const newProducts = data?.products?.slice(-20) || [];

  return (
    <>
      <Header />
      <ProductList url={url} title="Novedades" customProducts={newProducts} />
      <Footer />
    </>
  );
}
