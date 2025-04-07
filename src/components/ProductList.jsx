import { useEffect, useState } from "react";
import Card from "./ProductCard";
import Spinner from "./Spinner";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      // .then((res) => res.json())
      .then(async (res) => {
        if (!res.ok) {
          const errorJson = await res.json();
          throw new Error(`HTTP ${res.status} - ${errorJson.message}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(Array.isArray(data));
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
        // Manejo de errores
        // console.error("Error fetching products:", error);
      });
  }, []);
  // console.log(products);

  if (loading) {
    // return <p>Cargando...</p>;
    return <Spinner message="Cargando Productos..."/>;
  }
  if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  }
  if (!products.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Lista de Productos</h1>
      <div className="row">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
