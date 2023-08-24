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
  let url = 'posts.json';
  if (data) url = `posts.json?orderBy="user_id"&equalTo="${data}"`;

  const response = await postAPI(url, 'GET');

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
 * 게시글 좋아요 클릭
 * @param {*} postId
 * @param {*} data
 * @returns
 */
export async function likePost(postId, data) {
  const response = await postAPI(
    `posts/${postId}/liked_users.json`,
    'PUT',
    data,
  );

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
 * 게시글 수정 API
 * @param {String} postId 게시글 아이디
 * @param {Object} data 수정된 게시글
 * @returns
 */
export async function manipulatePost(postId, data) {
  const response = await postAPI(`posts/${postId}.json`, 'PATCH', data);

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
