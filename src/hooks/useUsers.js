import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import * as userService from '../services/userService';


export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch (e) {
      Swal.fire('Error', 'No se pudieron cargar los usuarios', 'error');
    } finally {
      setLoading(false);
    }
  };

  const saveUser = async (id, payload) => {
    try {
      if (id) await userService.updateUser(id, payload);
      else await userService.createUser(payload);
      await fetchUsers();
      Swal.fire('¡Éxito!', id ? 'Usuario actualizado' : 'Usuario creado', 'success');
    } catch {
      Swal.fire('Error', 'No se pudo guardar', 'error');
    }
  };

  const removeUser = async (id) => {
    try {
      await userService.deleteUser(id);
      await fetchUsers();
      Swal.fire('Eliminado', 'El usuario fue eliminado', 'success');
    } catch {
      Swal.fire('Error', 'No se pudo eliminar', 'error');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, fetchUsers, saveUser, removeUser };
}
