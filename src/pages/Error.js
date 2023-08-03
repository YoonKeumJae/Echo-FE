import { Link } from 'react-router-dom';
import StyledError from '@styles/error/Error-styled';

const ErrorPage = () => (
  <StyledError>
    <h1 className='title'>404</h1>
    <p className='content'>
      찾고 계신 페이지가 존재하지 않거나 이동되었습니다.
    </p>
    <Link to='/'>
      <button>홈으로</button>
    </Link>
  </StyledError>
);

export default ErrorPage;
