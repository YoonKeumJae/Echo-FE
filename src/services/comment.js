import { json } from 'react-router-dom';
import { apiServer } from '@config/api';

/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} data 입력 데이터
 * @returns 응답 객체
 */
export async function commentAPI(url, method, data) {
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
 * 댓글 받아오기 API
 * @param {String} postId 게시글 아이디
 * @returns 응답 객체
 */
export async function getComments(postId) {
  const response = await commentAPI(`comments/${postId}.json`, 'get');

  return response;
}

/**
 * 댓글 추가하기 API
 * @param {String} postId 게시글 아이디
 * @param {Object} data 댓글 내용
 * @returns 응답 객체
 */
export async function addComment(postId, data) {
  const response = await commentAPI(`comments/${postId}.json`, 'post', data);

  return response;
}

/**
 * 댓글 수정하기 API
 * @param {String} postId 게시글 아이디
 * @param {String} commentId 댓글 아이디
 * @param {Object} data 수정된 댓글 내용
 * @returns
 */
export async function manipulateComment(postId, commentId, data) {
  const response = await commentAPI(
    `comments/${postId}/${commentId}.json`,
    'PATCH',
    data,
  );

  return response;
}

/**
 * 댓글 삭제하기 API
 * @param {String} postId 게시글 아이디
 * @param {String} commentId 댓글 아이디
 * @returns 응답 객체
 */
export async function removeComment(postId, commentId) {
  const response = await commentAPI(
    `comments/${postId}/${commentId}.json`,
    'delete',
  );

  return response;
}
