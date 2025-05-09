import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";

export default function DealPage({ url }) {
  const { data } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return (
    <>
      <Header />
      <ProductList url={url} title="Ofertas" customProducts={deals} />
      <Footer />
    </>
  );
}
