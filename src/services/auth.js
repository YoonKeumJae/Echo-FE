/**
 * 로그인, 회원가입 API
 * @param {Object} authData 입력 데이터
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @returns
 */
export async function authAPI(authData, url, method) {
  const response = await fetch(`http://localhost:8080/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  return response;
}
