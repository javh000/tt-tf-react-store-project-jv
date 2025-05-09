import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const url = "https://dummyjson.com/products";

function Home() {
  return (
    <>
      <Header />
      <ProductList url={url}></ProductList>
      <Footer />
    </>
  );
}

export default Home;
