import { Outlet } from 'react-router-dom';

import MainNavigation from '@components/home/MainNavigation';
import AsideFriend from '@components/home/AsideFriend';
import StyledHome from '@styles/home/Home-styled';

const HomeLayout = () => {
  return (
    <StyledHome>
      <MainNavigation />

      <section>
        <Outlet />
      </section>

      {/* Aside */}
      <AsideFriend />
    </StyledHome>
  );
};

export default HomeLayout;
