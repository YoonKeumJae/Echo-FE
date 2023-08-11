import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import HomeRootLayout from '@pages/home/HomeRootLayout';
import HomePage, { loader as postsLoader } from '@pages/home/Home';
import PostDetailPage, {
  loader as postDetailLoader,
} from '@pages/home/PostDetail';
import ProfilePage, {
  loader as profileLoader,
} from '@pages/home/profile/Profile';
import EditProfilePage, {
  action as editProfileAction,
} from '@pages/home/profile/EditProfile';
import NotificationPage from '@pages/home/Notification';
import NotePage from '@pages/home/Note';

import AuthenticationPage from '@pages/auth/Authentication';
import SignInPage, { action as signInAction } from '@pages/auth/SignIn';
import SignUpPage, { action as signUpAction } from '@pages/auth/SignUp';
import AccountPage from '@pages/auth/Account';
import SearchIDPage, {
  action as searchIDAction,
} from '@pages/auth/account/SearchID';
import SearchPWDPage, {
  action as searchPWDAction,
} from '@pages/auth/account/SearchPWD';

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
            loader: postsLoader,
          },
          {
            path: ':postId',
            id: 'post-detail',
            element: <PostDetailPage />,
            loader: postDetailLoader,
          },
          {
            path: 'profile',
            id: 'profile-detail',
            loader: profileLoader,
            children: [
              {
                index: true,
                element: <ProfilePage />,
              },
              {
                path: 'edit',
                element: <EditProfilePage />,
                action: editProfileAction,
              },
            ],
          },
          {
            path: 'notification',
            element: <NotificationPage />,
          },
          {
            path: 'note',
            element: <NotePage />,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        loader: checkIsTokenLoader,
        children: [
          {
            path: 'signin',
            element: <SignInPage />,
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
                action: searchPWDAction,
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
