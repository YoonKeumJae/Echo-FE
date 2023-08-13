import { json } from 'react-router-dom';

/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} data 입력 데이터
 * @returns 응답 객체
 */
export async function postAPI(url, method, data) {
  try {
    const response = await fetch(
      `https://blog-miniproject-6fc40-default-rtdb.firebaseio.com/${url}`,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    return response;
  } catch (error) {
    throw json({ message: error.message }, { status: error.status });
  }
}

/**
 * 게시글 받아오기 함수
 * @param {*} data 사용자 이름 혹은 null
 * @returns
 */
export async function getPosts(data) {
  const response = await postAPI('posts.json', 'get', data);

  return response;
}

export async function getPost(id) {
  const response = await postAPI(`posts/${id}.json`, 'get');

  return response;
}

/**
 * 게시글 작성 함수
 * @param {Object} data 게시글
 * @returns 응답
 */
export async function createPost(data) {
  const response = await fetch(
    'https://echo-694a4-default-rtdb.firebaseio.com/posts.json',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  return response;
}
