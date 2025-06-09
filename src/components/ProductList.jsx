import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function ProductList({
  products = [],
  title = "Lista de Productos",
  loading = false,
  error = null,
}) {
  const limit = 15;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 0;

  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Calcular paginación
  const total = products.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = page * limit;
  const paginatedProducts = products.slice(startIndex, startIndex + limit);

  if (loading) return <Spinner message="Cargando Productos..." />;
  if (error) return <p>Error al cargar los productos: {error.message}</p>;
  if (total === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">{title}</h1>
      <div className="row">
        {paginatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center m-4 gap-5">
        <Button
          variant="primary"
          disabled={page === 0}
          onClick={() => goToPage(page - 1)}
          className="d-flex align-items-center"
        >
          <ChevronLeft /> Anterior
        </Button>
        <Button
          variant="primary"
          disabled={page + 1 >= totalPages}
          onClick={() => goToPage(page + 1)}
          className="d-flex align-items-center"
        >
          Siguiente <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default ProductList;