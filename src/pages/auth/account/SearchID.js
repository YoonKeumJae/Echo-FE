import { Suspense } from 'react';
import { Await, json, useActionData, useNavigation } from 'react-router-dom';

import FindID from '@components/auth/account/FindID';
import SearchIDForm from '@components/auth/account/SearchIDForm';
import { searchIDAPI } from '@services/auth';

const SearchIDPage = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'isSubmitting';

  if (data && data.id)
    return (
      <Suspense>
        <Await resolve={data}>
          {(loadedData) => <FindID data={loadedData} />}
        </Await>
      </Suspense>
    );

  return (
    <Suspense>
      <Await resolve={data}>
        {(loadedData) => (
          <SearchIDForm error={loadedData} isSubmitting={isSubmitting} />
        )}
      </Await>
    </Suspense>
  );
};

export default SearchIDPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    name: data.get('name'),
    phone: data.get('phone'),
  };

  const response = await searchIDAPI(authData.phone, 'phone');
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
  return {
    id: Object.values(resData)[0].id,
    created_at: Object.values(resData)[0].created_at,
  };
}
