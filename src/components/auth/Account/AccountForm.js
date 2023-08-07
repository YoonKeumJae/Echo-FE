import { useState } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';

import StyledSection from '@styles/auth/account/AccountForm-styled';
import SearchID from './SearchID';
import FindID from './FindID';
import SearchPWD from './SearchPWD';
import NewPassword from './NewPassword';

const AccountForm = () => {
  const [isFindID, setIsFindID] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  const selectedID = mode === 'id';
  const selectedPassword = mode === 'password';

  const completedFindID = () => setIsFindID(true);
  const completedNewPassword = () => setIsNewPassword(true);

  return (
    <StyledSection>
      <div className='account-section'>
        <Link to='/'>
          <h2 className='logo'>Logo</h2>
        </Link>
        <p className='description'>
          {!isFindID && !isNewPassword && '아이디/비밀번호 찾기'}
          {isFindID && '아이디 찾기가 완료되었습니다.'}
          {isNewPassword && '새로운 비밀번호를 설정해주세요.'}
        </p>

        {!isFindID && !isNewPassword && (
          <div className='account-mode'>
            <NavLink
              to='?mode=id'
              className={selectedID ? 'selected' : undefined}
            >
              아이디 찾기
            </NavLink>
            <NavLink
              to='?mode=password'
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

        <p className='navigation'>
          <Link to='/auth/signup' className='navigation-signup'>
            계정이 없으신가요?
          </Link>
        </p>
      </div>
    </StyledSection>
  );
};

export default AccountForm;
