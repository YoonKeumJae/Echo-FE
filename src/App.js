import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import HomeRootLayout from '@pages/HomeRootLayout';
import HomePage from '@pages/Home';
import PostDetailPage from '@pages/PostDetail';
import NotificationPage from '@pages/Notification';

import AuthenticationPage from '@pages/Authentication';
import { loader as logoutLoader } from '@pages/Logout';

import StyledApp from '@styles/App-styled';
import { tokenLoader, checkTokenLoader, checkIsTokenLoader } from '@utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        path: '/',
        element: <HomeRootLayout />,
        loader: checkTokenLoader,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/post/:postId',
            element: <PostDetailPage />,
          },
          {
            path: 'profile',
            element: <div>Profile</div>,
          },
          {
            path: 'notification',
            element: <NotificationPage />,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        loader: checkIsTokenLoader,
      },
      {
        path: 'logout',
        loader: logoutLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
};

export default App;
