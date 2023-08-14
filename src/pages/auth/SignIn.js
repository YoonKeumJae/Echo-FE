import { json, redirect, useActionData, useNavigation } from 'react-router-dom';

import SignInForm from '@components/auth/signin/SignInForm';
import { signInAPI } from '@services/auth';

const SignInPage = () => {
  const error = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return <SignInForm error={error} isSubmitting={isSubmitting} />;
};

export default SignInPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    id: data.get('id'),
    password: data.get('password'),
  };

  const response = await signInAPI(authData);

  // ID가 존재하지 않는 경우
  if (response.status === 422 || response.status === 401) {
    return { message: response.message, code: response.status };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 로그인 성공
  const resData = await response.json();
  const { token: accessToken } = resData;

  localStorage.setItem('token', accessToken);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}
