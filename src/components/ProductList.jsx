import useFetch from "./hooks/useFetch";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

function ProductList({
  url,
  title = "Lista de Productos",
  customProducts = null,
}) {
  const { data, loading, error } = useFetch(url);

  const products = customProducts || data?.products;

  if (loading) return <Spinner message="Cargando Productos..." />;
  if (error) return <p>Error al cargar los productos: {error.message}</p>;
  if (!data?.products?.length) return <p>No hay productos disponibles.</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">{title}</h1>
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
