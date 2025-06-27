import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UsersContainer from "../components/UsersContainer";
import { Helmet } from "react-helmet-async";

function Dashboard() {
  const { role, isAuthenticated } = useAuth();
  if (!isAuthenticated || role !== "admin") return <Navigate to="/login" />;

  return (
    <>
      <Helmet>
        <title>Panel de Administración | Novashade</title>
        <meta
          name="description"
          content="Administra los usuarios de tu tienda."
        />
      </Helmet>
      <Header />
      <UsersContainer />
      <Footer />
    </>
  );
}

export default Dashboard;
