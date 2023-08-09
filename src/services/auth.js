/**
 * API 요청 Interface
 * @param {Object} authData 입력 데이터
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @returns 응답 객체
 */
export async function authAPI(authData, url, method) {
  const response = await fetch(`http://localhost:8080/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
    // eslint-disable-next-line no-console
  }).catch((error) => console.log(error.message));

  return response;
}

/**
 * 로그인 API
 * @param {Object} authData 아이디, 비밀번호
 * @returns 응답 객체
 */
export async function signInAPI(authData) {
  const response = await authAPI(authData, 'login', 'POST');

  return response;
}

/**
 * 회원가입 API
 * @param {Object} authData 아이디, 비밀번호, 이름, 닉네임, 휴대폰번호
 * @returns 응답 객체
 */
export async function signUpAPI(authData) {
  const response = await authAPI(authData, 'signup', 'POST');

  return response;
}

/**
 * 아이디 찾기 API
 * @param {Object} authData 이름, 휴대폰번호
 * @returns 응답 객체
 */
export async function searchIDAPI(authData) {
  const response = await authAPI(authData, 'searchID', 'POST');

  return response;
}
