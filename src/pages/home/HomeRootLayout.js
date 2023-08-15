import { Suspense } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import MainNavigation from '@components/home/MainNavigation';
import AsideFriend from '@components/home/AsideFriend';
import StyledHomeLayout from '@styles/home/HomeLayout-styled';

const HomeRootLayout = () => {
  const users = useLoaderData();

  return (
    <StyledHomeLayout>
      <MainNavigation />

      <section>
        <Outlet />
      </section>

      {/* Aside */}
      <Suspense fallback={<p>Loding...</p>}>
        <AsideFriend users={users} />
      </Suspense>
    </StyledHomeLayout>
  );
};

export default HomeRootLayout;
