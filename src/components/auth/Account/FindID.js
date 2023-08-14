import { Link } from 'react-router-dom';

import StyledDiv from '@styles/auth/account/FindID-styled';

const FindID = ({ data }) => {
  const { id, created_at: createdAt } = data;

  return (
    <>
      <p className='description'>아이디 찾기가 완료되었습니다.</p>
      <StyledDiv>
        <div className='find-id'>
          <p>아이디</p>
          <p className='find'>{id}</p>
        </div>
        <div className='find-date'>
          <p>가입일</p>
          <p className='find'>{createdAt}</p>
        </div>
        <Link to='/' className='login-button'>
          로그인
        </Link>
      </StyledDiv>
    </>
  );
};

export default FindID;
