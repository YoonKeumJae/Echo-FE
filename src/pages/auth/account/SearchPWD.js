import { Suspense } from 'react';
import {
  Await,
  json,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import NewPassword from '@components/auth/account/NewPassword';
import SearchPWDForm from '@components/auth/account/SearchPWDForm';
import { searchIDAPI, changePasswordAPI } from '@services/auth';
import { getCurrentTime } from '@utils/date';

const SearchPWDPage = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  if (data && data.id)
    return (
      <Suspense>
        <Await resolve={data}>
          {(loadedData) => (
            <NewPassword data={loadedData} isSubmitting={isSubmitting} />
          )}
        </Await>
      </Suspense>
    );

  return (
    <Suspense>
      <Await resolve={data}>
        {(loadedData) => (
          <SearchPWDForm error={loadedData} isSubmitting={isSubmitting} />
        )}
      </Await>
    </Suspense>
  );
};

export default SearchPWDPage;

async function checkID(data) {
  const authData = {
    id: data.get('id'),
    phone: data.get('phone'),
  };

  const response = await searchIDAPI(authData.id, 'id');
  const resData = await response.json();

  // 아이디가 존재하지 않는 경우
  if (Object.keys(resData).length === 0) {
    return { message: '아이디가 존재하지 않습니다.', errorCode: 404 };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 계정찾기 성공
  return { key: Object.keys(resData)[0], id: Object.values(resData)[0].id };
}

async function changePassword(data) {
  const currentTime = getCurrentTime();
  const key = data.get('key');
  const authData = {
    id: data.get('id'),
    password: data.get('newPassword'),
    updated_at: currentTime,
  };

  const response = await changePasswordAPI(authData, key);
  const resData = await response.json();

  // 기존에 설정한 비밀번호와 동일한 경우
  if (response.status === 409) {
    return { message: resData.message, errorCode: response.status };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 비밀번호 변경 성공
  alert('비밀번호가 변경되었습니다.');
  return redirect('/');
}

export async function action({ request }) {
  const data = await request.formData();

  const response =
    request.method === 'POST'
      ? // 아이디 검색 (비밀번호를 변경하려는 아이디)
        await checkID(data)
      : // 비밀번호 변경
        await changePassword(data);

  return response;
}
