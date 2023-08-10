import { json, redirect } from 'react-router-dom';

import SignUpForm from '@components/auth/signup/SignUpForm';
import { signUpAPI } from '@services/auth';

const SignUpPage = () => {
  return <SignUpForm />;
};

export default SignUpPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    id: data.get('id'),
    nickname: data.get('nickname'),
    password: data.get('password'),
    username: data.get('name'),
    phone: data.get('phone'),
  };

  const response = await signUpAPI(authData);
  const resData = await response.json();

  // 닉네임이 중복인 경우
  if (response.status === 409) {
    return { message: resData.message };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 회원가입 성공
  return redirect('/');
}
