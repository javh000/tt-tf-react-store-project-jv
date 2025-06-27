import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { randomAvatar } from "../services/userService";
import {
  validateName,
  validateEmail,
  validateAvatarUrl,
} from "../utils/validation";
import AvatarPreview from "./AvatarPreview";

export default function UserFormModal({ show, onHide, onSave, initialData }) {
  const [form, setForm] = useState({ name: "", email: "", avatar: "" });
  const [errors, setErrors] = useState({});
  const [tempAvatar, setTempAvatar] = useState(randomAvatar());

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        email: initialData.email,
        avatar: initialData.avatar || "",
      });
      setTempAvatar(randomAvatar());
      setErrors({});
    } else {
      setForm({ name: "", email: "", avatar: "" });
      setTempAvatar(randomAvatar());
      setErrors({});
    }
  }, [initialData, show]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRegenerate = () =>
    form.avatar.trim() || setTempAvatar(randomAvatar());

  //  Manejo del envío del formulario
  const handleSubmit = () => {
    const errs = {
      // Validaciones de los campos del formulario
      name: validateName(form.name),
      email: validateEmail(form.email),
      avatar: validateAvatarUrl(form.avatar),
    };
    // Convierte `errs` a entries y filtra solo los truthy para obtener `filtered`
    const filtered = Object.fromEntries(
      Object.entries(errs).filter(([, v]) => v)
    );
    // Si hay errores, los actualiza el estado y sale para mostrar validaciones.
    if (Object.keys(filtered).length) return setErrors(filtered);
    const payload = {
      ...form,
      avatar: form.avatar.trim() ? form.avatar : tempAvatar,
    };
    onSave(initialData?.id, payload);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      aria-labelledby="user-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="user-form-modal">
          {initialData ? "Editar Usuario" : "Nuevo Usuario"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Nombre */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              required
              placeholder="Ej: Juan Pérez"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={form.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
              type="email"
              
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Avatar URL */}
          <Form.Group className="mb-3">
            <Form.Label>URL del Avatar (Opcional)</Form.Label>
            <Form.Control
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              isInvalid={!!errors.avatar}
              placeholder="Ej: https://ejemplo.com/avatar.jpg"
            />
            <Form.Control.Feedback type="invalid">
              {errors.avatar}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Preview */}
          <AvatarPreview
            avatarUrl={form.avatar.trim() ? form.avatar : tempAvatar}
            onRegenerate={handleRegenerate}
            isCustom={!!form.avatar.trim()}
            size={120}
            showLabel={true}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
