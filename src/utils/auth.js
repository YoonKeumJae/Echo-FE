import { json, redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

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

export function tokenLoader() {
  const token = getAuthToken();

  return token;
}

export function checkTokenLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth?mode=signin');
  }

  return null;
}

export function checkIsTokenLoader({ request }) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode');
  const token = getAuthToken();

  // 토큰이 존재할 경우 Error
  if (token && mode === 'signin') {
    throw json({ message: '잘못된 접근입니다.' }, { status: 403 });
  }

  return null;
}
