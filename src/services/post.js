import { json } from 'react-router-dom';
import { apiServer } from '@config/api';

/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} data 입력 데이터
 * @returns 응답 객체
 */
export async function postAPI(url, method, data) {
  try {
    const response = await fetch(apiServer + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    throw json({ message: error.message }, { status: error.status });
  }
}

/**
 * 게시글 받아오기 함수
 * @param {*} data 사용자 이름 혹은 null
 * @returns 응답
 */
export async function getPosts(data) {
  const response = await postAPI('posts.json', 'get', data);

  return response;
}

/**
 * 특정 게시글 받아오기
 * @param {String} id 게시글 ID
 * @returns 응답
 */
export async function getPost(id) {
  const response = await postAPI(`posts/${id}.json`, 'get');

  return response;
}

/**
 * 게시글 작성 API
 * @param {Object} data 게시글
 * @returns 응답
 */
export async function createPost(data) {
  const response = await postAPI('posts.json', 'post', data);

  return response;
}

/**
 * 게시글 삭제 API
 * @param {String} id 게시글 ID
 * @returns 응답
 */
export async function removePost(id) {
  const response = await postAPI(`posts/${id}.json`, 'delete');

  return response;
}
