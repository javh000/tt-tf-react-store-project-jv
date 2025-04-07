import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useFetch from "../components/hooks/useFetch";

export default function ProductDetail() {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);
  if (loading) {
    return <Spinner message="Cargando Producto..." />;
  }
  if (error) {
    return <p>Error al cargar el producto: {error.message}</p>;
  }
  if (!product) {
    return <p>No hay producto disponible.</p>;
  }

  return (
    <main className="container py-5">
      <article className="row justify-content-center">
        <div className="col-lg-10">
          <section className="card border-0 shadow-sm p-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6">
                <header>
                  <h1 className="mb-3">{product.title}</h1>
                </header>
                <p className="text-muted fs-5">{product.description}</p>
                <h2 className="text-success fw-bold mb-4">
                  Precio: ${product.price}
                </h2>
                <button className="btn btn-primary btn-lg w-100">
                  <i className="bi bi-cart-plus me-2"></i>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
