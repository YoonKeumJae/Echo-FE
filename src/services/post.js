/**
 * API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} method HTTP Method
 * @param {Object} data 입력 데이터
 * @returns 응답 객체
 */
export async function postAPI(url, method, data) {
  const response = await fetch(
    `https://blog-miniproject-6fc40-default-rtdb.firebaseio.com/${url}`,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
    // eslint-disable-next-line no-console
  ).catch((error) => console.log(error.message));

  return response;
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
