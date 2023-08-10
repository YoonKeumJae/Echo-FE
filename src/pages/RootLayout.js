import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { getTokenDuration } from '@utils/auth';

const RootLayout = () => {
  const token = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      navigate('/auth/logout');
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      navigate('/auth/logout');
    }, tokenDuration);
  }, [navigate, token]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
