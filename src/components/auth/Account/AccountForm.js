import { Link, NavLink, Outlet } from 'react-router-dom';

import StyledSection from '@styles/auth/account/AccountForm-styled';
// import SearchID from './SearchID';
// import FindID from './FindID';
// import SearchPWD from './SearchPWD';
// import NewPassword from './NewPassword';

const AccountForm = ({ mode }) => {
  return (
    <StyledSection>
      <div className='account-section'>
        <Link to='/'>
          <h2 className='logo'>Logo</h2>
        </Link>
        <p className='description'>
          {mode === 'search' && '아이디/비밀번호 찾기'}
          {mode === 'completed' && '아이디 찾기가 완료되었습니다.'}
          {mode === 'new' && '새로운 비밀번호를 설정해주세요.'}
        </p>

        {mode === 'search' && (
          <div className='account-mode'>
            <NavLink
              to='id?mode=search'
              className={({ isActive }) => (isActive ? 'selected' : undefined)}
            >
              아이디 찾기
            </NavLink>
            <NavLink
              to='password?mode=search'
              className={({ isActive }) => (isActive ? 'selected' : undefined)}
            >
              비밀번호 찾기
            </NavLink>
          </div>
        )}

        <Outlet />

        {mode === 'search' && (
          <p className='navigation'>
            <Link to='/auth/signup' className='navigation-signup'>
              계정이 없으신가요?
            </Link>
          </p>
        )}
      </div>
    </StyledSection>
  );
};

export default AccountForm;
