import { json } from 'react-router-dom';
import { apiServer } from '@config/api';

/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} authData 입력 데이터
 * @returns 응답 객체
 */
export async function userAPI(url, method, authData) {
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
 * user 정보 받아오기
 * @param {String} id 유저 아이디
 * @returns 닉네임
 */
export async function getUser(id) {
  const response = await userAPI(`users/${id}.json`, 'GET');

  return response;
}

export async function updateUser(id, data) {
  const response = await userAPI(`users/${id}.json`, 'PATCH', data);

  return response;
}
