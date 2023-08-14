import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { getTokenDuration } from '@utils/auth';
import { getUser } from '@services/user';
import store from '@store/configureStore';
import { loginUser } from '@store/user';

const RootLayout = () => {
  const token = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      navigate('/logout');
      return;
    }

    const setUser = async () => {
      const id = localStorage.getItem('id');
      const response = await getUser(id);
      const { nickname } = await response.json();

      await store.dispatch(loginUser({ accessToken: token, id, nickname }));
    };
    setUser();

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      navigate('/logout');
    }, tokenDuration);
  }, [navigate, token]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
