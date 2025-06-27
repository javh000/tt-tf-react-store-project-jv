import NavbarComponent from "./NavbarComponent";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <header>
      <NavbarComponent />
    </header>
  );
}

export default Header;
