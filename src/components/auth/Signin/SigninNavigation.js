import { Link } from 'react-router-dom';

import StyledDiv from '@styles/auth/signin/SignInNavigation-styled';

const SignInNavigation = () => {
  return (
    <StyledDiv>
      <p className='navigation'>
        <Link to='/auth/account/id' className='link-text account'>
          아이디/비밀번호 찾기
        </Link>
      </p>
      <div className='divider'>
        <p>또는</p>
      </div>

      <p className='navigation'>
        계정이 없으신가요?
        <Link to='/auth/signup' relative='path' className='link-text'>
          회원가입
        </Link>
      </p>
    </StyledDiv>
  );
};

export default SignInNavigation;
