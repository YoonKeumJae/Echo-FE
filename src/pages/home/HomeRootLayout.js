import { Suspense } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import Modal from '@components/common/Modal';
import MainNavigation from '@components/home/MainNavigation';
import AsideFriend from '@components/home/AsideFriend';
import Chatbot from '@components/home/Chatbot';
import StyledHomeLayout from '@styles/home/HomeLayout-styled';

const HomeRootLayout = () => {
  const users = useLoaderData();

  return (
    <StyledHomeLayout>
      <MainNavigation />

      <section>
        <Outlet />
      </section>

      <Suspense fallback={<p>Loding...</p>}>
        <AsideFriend users={users} />
      </Suspense>

      <Modal isChatbot={true}>
        <Chatbot />
      </Modal>
    </StyledHomeLayout>
  );
};

export default HomeRootLayout;
