import { Link } from 'react-router-dom';

import kakao from '@assets/kakao.png';

const SigninNavigation = () => {
  return (
    <>
      <p className='navigation'>
        <Link to='?mode=signup' className='link-text'>
          회원가입
        </Link>
      </p>
      <div className='divider'>
        <p>또는</p>
      </div>
      <div className='social-login'>
        <Link to='?mode=social&type=kakao'>
          <button type='button'>
            <img src={kakao} width={320} alt='kakao login' />
          </button>
        </Link>
      </div>
      <p className='navigation'>
        가입하신 계정을 잊으셨나요?
        <Link to='?mode=account' className='link-text'>
          계정찾기
        </Link>
      </p>
    </>
  );
};

export default SigninNavigation;
