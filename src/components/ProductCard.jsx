function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4" key={product.id}>
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: "contain", height: "200px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="mt-auto">
            <button className="btn btn-primary w-100">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
