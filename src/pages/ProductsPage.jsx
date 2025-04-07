import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


function ProductsPage() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
        <ProductList></ProductList>
        <Footer></Footer> 

    </>
  );
}

export default ProductsPage;