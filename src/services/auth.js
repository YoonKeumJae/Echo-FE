export const signupAPI = async (authData) => {
  const response = await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (!response.ok) return response;

  return { status: 200 };
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

  return response;
};
