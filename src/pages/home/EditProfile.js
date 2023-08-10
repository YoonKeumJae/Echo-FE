import { json, redirect } from 'react-router-dom';

import EditProfile from '@components/home/EditProfile';
import { updateUser } from '@services/user';

const EditProfilePage = () => {
  return <EditProfile />;
};

export default EditProfilePage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    background_img: data.get('backgroundImage'),
    profile_img: data.get('profileImage'),
    nickname: data.get('nickname'),
    bio: data.get('bio'),
  };

  const response = await updateUser(authData);
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
