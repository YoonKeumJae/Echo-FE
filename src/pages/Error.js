import { Link, useRouteError } from 'react-router-dom';
import StyledError from '@styles/error/Error-styled';

const ErrorPage = () => {
  const error = useRouteError();

  const status = error.status || 404;
  const message = error.data.message || 'Not Found';

  return (
    <StyledError>
      <h1 className='title'>{status}</h1>
      <p className='content'>{message}</p>
      <Link to='/'>
        <button>홈으로</button>
      </Link>
    </StyledError>
  );
};

export default ErrorPage;
