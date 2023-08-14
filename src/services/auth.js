import { json } from 'react-router-dom';
import { apiServer } from '@config/api';

/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} authData 입력 데이터
 * @returns 응답 객체
 */
export async function authAPI(url, method, authData) {
  try {
    const response = await fetch(apiServer + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });

    return response;
  } catch (error) {
    throw json({ message: error.message }, { status: error.status });
  }
}

/**
 * 로그인 API
 * @param {Object} authData 아이디, 비밀번호
 * @returns 응답 객체
 */
export async function signInAPI(authData) {
  const response = await authAPI(
    `users.json?orderBy="id"&equalTo="${authData.id}"`,
    'GET',
  );

  const resData = await response.json();

  // 아이디가 일치하지 않는 경우
  if (Object.keys(resData).length === 0) {
    return { message: '아이디가 존재하지 않습니다.', status: 401 };
  }

  // 비밀번호가 일치하지 않는 경우
  if (authData.password !== Object.values(resData)[0].password) {
    return { message: '비밀번호가 일치하지 않습니다.', status: 422 };
  }

  const responseToken = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  return responseToken;
}

/**
 * 회원가입 API
 * @param {Object} authData 아이디, 비밀번호, 이름, 닉네임, 휴대폰번호
 * @returns 응답 객체
 */
export async function signUpAPI(authData) {
  await authAPI('users.json', 'POST', authData);

  const response = await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  return response;
}

/**
 * 아이디 찾기 API
 * @param {String} data 이름, 휴대폰번호
 * @param {String} type 이름, 휴대폰
 * @returns 응답 객체
 */
export async function searchIDAPI(data, type) {
  const response = await authAPI(
    `users.json?orderBy="${type}"&equalTo="${data}"`,
    'GET',
  );

  return response;
}

/**
 * 비밀번호 변경 API
 * @param {Object} authData 아이디, 비밀번호
 * @returns 응답 객체
 */
export async function changePasswordAPI(authData, key) {
  const response = await authAPI(`users/${key}.json`, 'PATCH', authData);

  return response;
}
