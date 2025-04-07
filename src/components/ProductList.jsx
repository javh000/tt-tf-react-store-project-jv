import useFetch from "./hooks/useFetch";
import Card from "./ProductCard";
import Spinner from "./Spinner";

function ProductList() {
  const url = "https://dummyjson.com/products";
  const { data, loading, error } = useFetch(url);

  if (loading) return <Spinner message="Cargando Productos..." />;
  if (error) return <p>Error al cargar los productos: {error.message}</p>;
  if (!data?.products?.length) return <p>No hay productos disponibles.</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Lista de Productos</h1>
      <div className="row">
        {data.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
