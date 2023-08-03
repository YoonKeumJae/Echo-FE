export const signupAPI = async (authData) => {
  // eslint-disable-next-line no-console
  console.log(authData);
};

/**
 * 로그인 API
 * @param {id: String, password: String} authData
 * @returns error or null
 */
export const singinAPI = async (authData) => {
  const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (!response.ok) {
    return response;
  }

  const resData = await response.json();
  const { token } = resData;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return { status: 200 };
};
