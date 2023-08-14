import { Suspense } from 'react';
import { Await, json, redirect, useRouteLoaderData } from 'react-router-dom';

import EditProfile from '@components/home/profile/EditProfile';
import { updateUser } from '@services/user';
import store from '@store/configureStore';
import { editUser } from '@store/user';
import { getCurrentTime } from '@utils/date';

const EditProfilePage = () => {
  const { id, user } = useRouteLoaderData('profile-detail');

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={user}>
        {(loadedUser) => <EditProfile id={id} user={loadedUser} />}
      </Await>
    </Suspense>
  );
};

export default EditProfilePage;

export async function action({ request }) {
  const data = await request.formData();

  const currentTime = getCurrentTime();
  const id = data.get('id');
  const updateProfile = {
    nickname: data.get('nickname'),
    bio: data.get('bio'),
    updated_at: currentTime,
  };

  const response = await updateUser(id, updateProfile);

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  store.dispatch(editUser({ nickname: data.get('nickname') }));

  // 업데이트 성공
  return redirect('/');
}
