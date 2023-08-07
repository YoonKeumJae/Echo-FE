import { useNavigate } from 'react-router-dom';

import StyledFindID from '@styles/auth/account/FindID-styled';

const FindID = () => {
  const navigate = useNavigate();

  const onClickLogin = () => navigate('/auth/signin');

  return (
    <StyledFindID>
      <div className='find-id'>
        <p>아이디</p>
        <p className='find'>jay0214</p>
      </div>
      <div className='find-date'>
        <p>가입일</p>
        <p className='find'>2023.02.14</p>
      </div>
      <div className='button-container'>
        <button className='login-button' onClick={onClickLogin}>
          로그인
        </button>
      </div>
    </StyledFindID>
  );
};

export default FindID;
