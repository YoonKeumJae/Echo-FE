import { Link, useRouteLoaderData } from 'react-router-dom';

const HomePage = () => {
  const token = useRouteLoaderData('root');

  return (
    <div>
      {token && (
        <div style={{ textAlign: 'center' }}>
          <button style={{ background: '#000000', padding: '8px 16px' }}>
            <Link to='logout' style={{ color: '#ffffff' }}>
              임시 로그아웃
            </Link>
          </button>
        </div>
      )}
      {!token && <Link to='auth?mode=signin'>로그인</Link>}
    </div>
  );
};

export default HomePage;
