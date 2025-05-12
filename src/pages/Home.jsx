import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home({url}) {
  return (
    <>
      <Header />
      <ProductList url={url}></ProductList>
      <Footer />
    </>
  );
}

export default Home;
