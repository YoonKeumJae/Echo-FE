import { json, useActionData } from 'react-router-dom';

import FindID from '@components/auth/account/FindID';
import SearchIDForm from '@components/auth/account/SearchIDForm';
import { searchIDAPI } from '@services/auth';

const SearchIDPage = () => {
  const data = useActionData();

  if (data && data.id) return <FindID data={data} />;

  return <SearchIDForm error={data} />;
};

export default SearchIDPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    name: data.get('name'),
    phone: data.get('phone'),
  };

  const response = await searchIDAPI(authData);
  const resData = await response.json();

  // 이름, 휴대폰이 일치하지 않을 경우
  if (response.status === 404) {
    return { message: resData.message, errorCode: response.status };
  }

  // 내부 서버 오류
  if (!response.ok) {
    throw json({ message: '서버 상태가 원활하지 않습니다.' }, { status: 500 });
  }

  // 계정찾기 성공
  return {
    id: resData.id,
    date: resData.date,
  };
}
