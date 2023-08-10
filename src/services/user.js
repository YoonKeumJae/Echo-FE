export async function getUser() {
  const response = await fetch('http://localhost:8080/user');

  return response;
}
