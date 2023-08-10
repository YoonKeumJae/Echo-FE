export async function getUser() {
  const response = await fetch('http://localhost:8080/user');

  return response;
}

export async function updateUser(data) {
  const response = await fetch('http://localhost:8080/user/update', {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return response;
}
