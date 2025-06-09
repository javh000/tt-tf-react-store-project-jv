import { useSearchParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SearchResultsPage({ url }) {
  const { data, loading, error } = useFetch(`${url}?limit=0&skip=0`);
  const allProducts = data?.products || [];

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  const filteredProducts = allProducts.filter((product) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    console.log(searchTerms);
    const productText = `${product.title.toLowerCase()} ${product.description.toLowerCase()} ${product.category.toLowerCase()}`;
    return searchTerms.every((term) =>
      // Verifica si el término de búsqueda es una palabra completa con delimitadores de palabra
      // Esto evita coincidencias parciales dentro de palabras
      new RegExp(`\\b${term}\\b`).test(productText)
    );
  });

  console.log(filteredProducts);

  if (filteredProducts.length === 0 && !loading) {
    return (
      <>
        <Header />
        <div className="container mt-4 flex-grow-1">
          <h1 className="mb-4 text-center">No se encontraron resultados</h1>
          <p className="text-center">
            No se encontraron productos que coincidan con "{searchTerm}".
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ProductList
        products={filteredProducts}
        title={`Resultados de búsqueda para: "${searchTerm}"`}
        loading={loading}
        error={error}
      ></ProductList>
      <Footer />
    </>
  );
}
