import { json, redirect } from 'react-router-dom';

import SignInForm from '@components/auth/signin/SignInForm';
import { authAPI } from '@services/auth';

const SignInPage = () => {
  return <SignInForm />;
};

export default SignInPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    id: data.get('id'),
    password: data.get('password'),
  };

  const response = await authAPI(authData, 'login', 'POST');
  const resData = await response.json();

  // ID가 존재하지 않는 경우
  if (response.status === 422 || response.status === 401) {
    return { message: resData.message, errorCode: response.status };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 로그인 성공
  const { token } = resData;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}
