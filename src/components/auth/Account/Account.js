import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import StyledAccount from '@styles/auth/account/Account-styled';
import SearchID from './SearchID';
import FindID from './FindID';
import SearchPWD from './SearchPWD';
import NewPassword from './NewPassword';

const Signin = () => {
  const [isFindID, setIsFindID] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const selectedID = type === 'id';
  const selectedPassword = type === 'password';

  const completedFindID = () => setIsFindID(true);
  const completedNewPassword = () => setIsNewPassword(true);

  return (
    <StyledAccount>
      <div className='account-section'>
        <h2 className='logo'>Logo</h2>
        <p className='description'>
          {!isFindID && !isNewPassword && '아이디/비밀번호 찾기'}
          {isFindID && '아이디 찾기가 완료되었습니다.'}
          {isNewPassword && '새로운 비밀번호를 설정해주세요.'}
        </p>

        {!isFindID && !isNewPassword && (
          <div className='account-mode'>
            <NavLink
              to='?mode=account&type=id'
              className={selectedID ? 'selected' : undefined}
            >
              아이디 찾기
            </NavLink>
            <NavLink
              to='?mode=account&type=password'
              className={selectedPassword ? 'selected' : undefined}
            >
              비밀번호 찾기
            </NavLink>
          </div>
        )}

        {selectedID && !isFindID && <SearchID onSuccess={completedFindID} />}
        {selectedID && isFindID && <FindID />}
        {selectedPassword && !isNewPassword && (
          <SearchPWD onSuccess={completedNewPassword} />
        )}
        {selectedPassword && isNewPassword && <NewPassword />}
      </div>
    </StyledAccount>
  );
};

export default Signin;
