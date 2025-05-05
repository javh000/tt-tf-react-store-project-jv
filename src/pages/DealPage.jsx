import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

export default function DealPage({ url }) {
  const { data } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return (
    <>
      <Header></Header>
      <NavbarComponent></NavbarComponent>
      <ProductList url={url} title="Ofertas" customProducts={deals} />
      <Footer></Footer>
    </>
  );
}
