import Header from "../components/Header";
import NavbarComponent from "../components/NavbarComponent";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const url = "https://dummyjson.com/products";


function ProductsPage() {
  return (
    <>
      <Header></Header>
      <NavbarComponent></NavbarComponent>
      <ProductList url={url}></ProductList>
      <Footer></Footer>
    </>
  );
}

export default ProductsPage;
