// src/components/Header.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import NavbarDashboard from "./NavbarDashboard";

function Header() {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith("/dashboard");

  // Ajustar padding‑top del <body> para que el contenido no quede escondido
  useEffect(() => {
    const nav = document.querySelector(".navbar"); // Bootstrap pone .navbar a ambos
    if (!nav) return;

    const setPadding = () =>
      (document.body.style.paddingTop = `${nav.offsetHeight}px`);

    setPadding(); // al montar
    window.addEventListener("resize", setPadding); // por si cambia el alto

    return () => window.removeEventListener("resize", setPadding);
  }, [isDashboard]); // se vuelve a medir si cambia de público <--> dashboard

  return (
    <header>
      {isDashboard ? <NavbarDashboard /> : <NavbarComponent />}
    </header>
  );
}

export default Header;

