import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DealPage({ url }) {
  const { data } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return (
    <>
      <Header></Header>
      <ProductList url={url} title="Ofertas" customProducts={deals} />
      <Footer></Footer>
    </>
  );
}
