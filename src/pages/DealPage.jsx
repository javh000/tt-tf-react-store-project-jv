import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet-async";

export default function DealPage({ url }) {
  const { data, loading, error } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return (
    <>
      <Helmet>
        <title>Ofertas | Novashade</title>
        <meta
          name="description"
          content="Descubre nuestras ofertas especiales y ahorra en tus compras."
        />
      </Helmet>

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
