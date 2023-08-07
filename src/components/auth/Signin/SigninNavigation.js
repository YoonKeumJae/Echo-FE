import { Link } from 'react-router-dom';

import kakao from '@assets/social/kakao.png';
import StyledDiv from '@styles/auth/signin/SignInNavigation-styled';

const SignInNavigation = () => {
  return (
    <StyledDiv>
      <p className='navigation'>
        <Link to='/auth/account/id?mode=search' className='link-text account'>
          아이디/비밀번호 찾기
        </Link>
      </p>
      <div className='divider'>
        <p>또는</p>
      </div>
      <div className='social-login'>
        <Link to='/auth/social?type=kakao'>
          <button type='button'>
            <img src={kakao} width={320} alt='kakao login' />
          </button>
        </Link>
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
