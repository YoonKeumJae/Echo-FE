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
 * 유저들의 정보 받아오기
 * @returns 유저들의 정보
 */
export async function getUsers() {
  const response = await userAPI('users.json', 'GET');

  return response;
}

/**
 * 유저 정보 받아오기
 * @param {String} id 유저 아이디
 * @returns 유저 정보
 */
export async function getUser(id) {
  const response = await userAPI(`users/${id}.json`, 'GET');

  return response;
}

/**
 * 유저 프로필 업데이트
 * @param {String} id 유저 아이디
 * @param {Object} data 수정된 정보
 * @returns 응답
 */
export async function updateUser(id, data) {
  const response = await userAPI(`users/${id}.json`, 'PATCH', data);

  const responsePosts = await userAPI(
    `posts.json?orderBy="user_id"&equalTo="${id}"`,
    'GET',
  );
  const resData = await responsePosts.json();

  Object.keys(resData).forEach(async (postId) => {
    await userAPI(`posts/${postId}.json`, 'PATCH', { nickname: data.nickname });
  });

  return response;
}
