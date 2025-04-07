import React from "react";

function Gallery() {
  const images = [
    "https://placehold.co/150",
    "https://placehold.co/150x150/0000FF/FFFFFF",
    "https://placehold.co/150x150/FF0000/FFFFFF",
  ];

  return (
    <section
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen ${index + 1}`}
          style={{ width: "150px", height: "150px" }}
        />
      ))}
    </section>
  );
}

export default Gallery