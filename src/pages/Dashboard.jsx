import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UsersContainer from "../components/UsersContainer";

function Dashboard() {
  const { role, isAuthenticated } = useAuth();
  if (!isAuthenticated || role !== "admin") return <Navigate to="/login" />;

  return (
    <>
      <Header />
      <UsersContainer />
      <Footer />
    </>
  );
}

export default Dashboard;
