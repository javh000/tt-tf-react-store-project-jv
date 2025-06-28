import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import UserTable from "./UserTable";
import UserFormModal from "./UserFormModal";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

export default function UsersContainer() {

  const { users, loading, saveUser, removeUser } = useUsers();
  const [modal, setModal] = useState({ show: false, user: null });

  const handleNew = () => setModal({ show: true, user: null });
  const handleEdit = (u) => setModal({ show: true, user: u });
  const handleClose = () => setModal({ show: false, user: null });
  const handleSave = (id, data) => saveUser(id, data);

  const Navigate = useNavigate();

  const handleDelete = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (isConfirmed) {
      removeUser(id);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Gestionar usuarios</h1>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="info" onClick={()=> Navigate("/")}>Inicio</Button>
        <Button variant="success" onClick={handleNew}>Nuevo Usuario</Button>
      </div>
      <UserTable
        users={users}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <UserFormModal
        show={modal.show}
        onHide={handleClose}
        onSave={handleSave}
        initialData={modal.user}
      />
    </Container>
  );
}
