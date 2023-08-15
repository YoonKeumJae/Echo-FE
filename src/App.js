import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import HomeRootLayout from '@pages/home/HomeRootLayout';
import HomePage, {
  loader as postsLoader,
  action as addPostAction,
} from '@pages/home/Home';
import PostDetailPage, {
  loader as postDetailLoader,
  action as addCommentAction,
} from '@pages/home/post/PostDetail';
import EditPostPage, {
  action as manipulatePostAction,
} from '@pages/home/post/EditPost';
import { action as manipulateCommentAction } from '@pages/home/comment/Manipulate';
import { action as removeCommentAction } from '@pages/home/comment/Remove';
import ProfilePage, {
  loader as profileLoader,
  action as removePostAction,
} from '@pages/home/profile/Profile';
import EditProfilePage, {
  action as editProfileAction,
} from '@pages/home/profile/EditProfile';
import SearchPage, { loader as SearchDataLoader } from '@pages/home/Search';
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
import store from '@store/configureStore';
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
            action: addPostAction,
          },
          {
            path: ':postId',
            id: 'post-detail',
            loader: postDetailLoader,
            children: [
              {
                index: true,
                element: <PostDetailPage />,
                action: addCommentAction,
              },
              {
                path: 'update',
                element: <EditPostPage />,
                action: manipulatePostAction,
              },
              {
                path: 'edit',
                action: manipulateCommentAction,
              },
              {
                path: 'remove',
                action: removeCommentAction,
              },
            ],
          },
          {
            path: 'profile/:userId',
            id: 'profile-detail',
            loader: profileLoader,
            children: [
              {
                index: true,
                element: <ProfilePage />,
                action: removePostAction,
              },
              {
                path: 'edit',
                element: <EditProfilePage />,
                action: editProfileAction,
              },
            ],
          },
          {
            path: 'search',
            element: <SearchPage />,
            loader: SearchDataLoader,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledApp>
  );
};

export default App;
