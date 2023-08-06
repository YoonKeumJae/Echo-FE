import { Outlet } from 'react-router-dom';

import MainNavigation from '@components/home/MainNavigation';
import AsideFriend from '@components/home/AsideFriend';
import StyledHomeLayout from '@styles/home/HomeLayout-styled';

const HomeRootLayout = () => {
  return (
    <StyledHomeLayout>
      <MainNavigation />

      <section>
        <Outlet />
      </section>

      {/* Aside */}
      <AsideFriend />
    </StyledHomeLayout>
  );
};

export default HomeRootLayout;
