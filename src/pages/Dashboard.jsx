import React from "react";
import { Container, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { role, isAuthenticated } = useAuth();

  if (!isAuthenticated || role !== "admin") {
    return <Navigate to="/login" />;
  }

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h2>Dashboard en construction</h2>
      <Link to="/">
          <Button variant="primary" className="w-20">
            Volver a la página de inicio
          </Button>
        </Link>
    </Container>
  );
}

export default Dashboard;
