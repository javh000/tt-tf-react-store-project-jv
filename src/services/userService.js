const API_URL = "https://685abd1e9f6ef96111579e78.mockapi.io/api/users";

export const randomAvatar = () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${randomString}`;
};

export async function getUsers() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error fetching users');
  return res.json();
}

export async function createUser(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error creating user');
  return res.json();
}

export async function updateUser(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error updating user');
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error deleting user');
  return res.json();
}