import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import HomeRootLayout from '@pages/HomeRootLayout';
import HomePage from '@pages/home/Home';
import PostDetailPage from '@pages/home/PostDetail';
import NotificationPage from '@pages/home/Notification';

import AuthenticationPage from '@pages/auth/Authentication';
import { loader as logoutLoader } from '@pages/auth/Logout';
import SignInPage, { action as signInAction } from '@pages/auth/SignIn';
import SignUpPage, { action as signUpAction } from '@pages/auth/SignUp';
import AccountPage from '@pages/auth/Account';
import SearchIDPage, { action as searchIDAction } from '@pages/auth/SearchID';
import SearchPWDPage from '@pages/auth/SearchPWD';

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
            path: ':postId',
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
        children: [
          {
            path: 'signin',
            element: <SignInPage />,
            loader: checkIsTokenLoader,
            action: signInAction,
          },
          {
            path: 'signup',
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            path: 'account',
            element: <AccountPage />,
            children: [
              {
                path: 'id',
                element: <SearchIDPage />,
                action: searchIDAction,
              },
              {
                path: 'password',
                element: <SearchPWDPage />,
              },
            ],
          },
        ],
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
