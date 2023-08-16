import { json, redirect } from 'react-router-dom';
import { getUsers } from '@services/user';

/**
 * 토큰의 잔여 시간을 받아오기 위한 함수
 * @returns 잔여 시간
 */
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

/**
 * 토큰을 받아오는 함수
 * @returns 토큰
 */
export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

/**
 * 토큰을 반환해주는 Loader
 * @returns 토큰
 */
export function tokenLoader() {
  const token = getAuthToken();

  return token;
}

/**
 * 토큰이 없는 경우 로그인 페이지로 이동시키기 위한 Loader
 * @returns 로그인페이지로 이동
 */
export async function checkTokenLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth/signin');
  }

  const response = await getUsers();
  const resData = await response.json();

  if (!resData) return [];

  const users = Object.entries(resData)
    .map((user, idx) => ({
      ...user[1],
      id: Object.keys(resData)[idx],
    }))
    .reverse()
    .slice(0, 3);

  return users;
}

/**
 * 토큰이 있는 경우 접근을 제한하기 위한 Loader
 * @returns 에러 요청
 */
export function checkIsTokenLoader() {
  const token = getAuthToken();

  // 토큰이 존재할 경우 Error
  if (token) {
    throw json(
      { message: '요청한 페이지를 찾을 수 없습니다.' },
      { status: 404 },
    );
  }

  return null;
}
