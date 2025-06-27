export function validateName(name) {
  if (!name.trim()) return "Nombre obligatorio";
  if (name.length < 3) return "Mínimo 3 caracteres";
  return "";
}

export function validateEmail(email) {
  if (!email.trim()) return "Email obligatorio";
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) return "Formato inválido";
  return "";
}

export function validateAvatarUrl(url) {
  if (!url.trim()) return "";
  const re = /^https?:\/\/[^\s/$.?#].[^]*$/;
  if (!re.test(url)) return "URL inválida";
  return "";
}
