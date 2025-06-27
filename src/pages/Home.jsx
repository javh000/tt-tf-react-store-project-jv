import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";
import { Helmet } from "react-helmet-async";

function Home({ url }) {
  const { data, loading, error } = useFetch(`${url}?limit=100&skip=0`);

  const allProducts = data?.products || [];

  return (
    <>
      <Helmet>
        <title>Inicio | Novashade</title>
        <meta name="description" content="Bienvenido a Novashade." />
      </Helmet>
      
      <Header />
      <ProductList
        products={allProducts}
        loading={loading}
        error={error}
      ></ProductList>
      <Footer />
    </>
  );
}

export default Home;
