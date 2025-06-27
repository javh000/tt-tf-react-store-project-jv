import { Table, Button } from "react-bootstrap";
import AvatarPreview from "./AvatarPreview";
import Spinner from "./Spinner"

export default function UserTable({ users, loading, onEdit, onDelete }) {
  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner message="Cargando usuarios" />
      </div>
    );
  return (
    <div className="table-responsive">
      <Table bordered hover>
        <thead className="table-light">
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
            <th style={{ minWidth: 170 }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No hay usuarios
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>
                  <AvatarPreview
                    avatarUrl={u.avatar}
                    isCustom={true}
                    size={50}
                    showLabel={false}
                  />
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <div className="d-grid gap-2 d-sm-flex">
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => onEdit(u)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onDelete(u.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
