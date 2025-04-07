import React, { use } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  const url = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
      fetch(url)
        .then(async (res) => {
          if (!res.ok) {
            const errorJson = await res.json();
            throw new Error(`HTTP ${res.status} - ${errorJson.message}`);
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.log(error);
        });
    }
    , [url]);
  console.log(product);
  if (loading) {
    return <Spinner message="Cargando Producto..."/>;
  }
  if (error) {
    return <p>Error al cargar el producto: {error.message}</p>;
  }
  if (!product) {
    return <p>No hay producto disponible.</p>;
  }
 
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm p-4">
            <div className="row g-4 align-items-center">
              {/* Imagen */}
              <div className="col-md-6 text-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
  
              {/* Detalles */}
              <div className="col-md-6">
                <h2 className="mb-3">{product.title}</h2>
                <p className="text-muted fs-5">{product.description}</p>
                <h4 className="text-success fw-bold mb-4">Precio: ${product.price}</h4>
  
                <button className="btn btn-primary btn-lg w-100">
                  <i className="bi bi-cart-plus me-2"></i>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
