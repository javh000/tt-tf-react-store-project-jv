import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <Button
      onClick={scrollToTop}
      variant="primary-outline"
      className="position-fixed bottom-0 end-0 m-4 rounded-circle border-3 text-secondary border-secondary d-flex align-items-center justify-content-center shadow"
      style={{ width: "3rem", height: "3rem", zIndex: 1030 }}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} />
    </Button>
  ) : null;
}

export default ScrollToTopButton;
