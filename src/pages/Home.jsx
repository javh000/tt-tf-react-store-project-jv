import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../components/hooks/useFetch";

function Home({ url }) {
  const { data, loading, error } = useFetch(`${url}?limit=100&skip=0`);

  const allProducts = data?.products || [];

  return (
    <>
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
