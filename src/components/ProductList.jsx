import useFetch from "./hooks/useFetch";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductList({ url, title = "Lista de Productos", customProducts = null }) {
  const limit = 15;
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const { data, loading, error } = customProducts
    ? { data: null, loading: false, error: null }
    : useFetch(`${url}?limit=${limit}&skip=${page * limit}`);

  const allProducts = customProducts || data?.products;
  const total = customProducts ? customProducts.length : data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  const products = customProducts
    ? allProducts?.slice(page * limit, page * limit + limit)
    : allProducts;

  if (loading) return <Spinner message="Cargando Productos..." />;
  if (error) return <p>Error al cargar los productos: {error.message}</p>;
  if (!products?.length) return <p>No hay productos disponibles.</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">{title}</h1>
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center m-4 gap-5">
        <Button
          variant="primary"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="d-flex align-items-center"
        >
          <ChevronLeft /> Anterior
        </Button>
        <Button
          variant="primary"
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(page + 1)}
          className="d-flex align-items-center"
        >
          Siguiente <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default ProductList;
