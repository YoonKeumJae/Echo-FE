import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import AuthenticationPage from '@pages/auth/Authentication';
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
        async lazy() {
          const { default: HomeRootLayout } = await import(
            './pages/home/HomeRootLayout'
          );

          return { Component: HomeRootLayout };
        },
        loader: checkTokenLoader,
        children: [
          {
            index: true,
            async lazy() {
              const {
                default: HomePage,
                loader: postsLoader,
                action: addPostAction,
              } = await import('@pages/home/Home');

              return {
                Component: HomePage,
                loader: postsLoader,
                action: addPostAction,
              };
            },
          },
          {
            path: ':postId',
            id: 'post-detail',
            async lazy() {
              const { loader: postDetailLoader } = await import(
                '@pages/home/post/PostDetail'
              );

              return { loader: postDetailLoader };
            },
            children: [
              {
                index: true,
                async lazy() {
                  const { action: addCommentAction, default: PostDetailPage } =
                    await import('@pages/home/post/PostDetail');

                  return {
                    Component: PostDetailPage,
                    action: addCommentAction,
                  };
                },
              },
              {
                path: 'update',
                async lazy() {
                  const {
                    action: manipulatePostAction,
                    default: EditPostPage,
                  } = await import('@pages/home/post/EditPost');

                  return {
                    Component: EditPostPage,
                    action: manipulatePostAction,
                  };
                },
              },
              {
                path: 'edit',
                async lazy() {
                  const { action: manipulateCommentAction } = await import(
                    '@pages/home/comment/Manipulate'
                  );

                  return {
                    action: manipulateCommentAction,
                  };
                },
              },
              {
                path: 'remove',
                async lazy() {
                  const { action: removeCommentAction } = await import(
                    '@pages/home/comment/Remove'
                  );

                  return {
                    action: removeCommentAction,
                  };
                },
              },
            ],
          },
          {
            path: 'profile/:userId',
            id: 'profile-detail',
            async lazy() {
              const { loader: profileLoader } = await import(
                '@pages/home/profile/Profile'
              );

              return {
                loader: profileLoader,
              };
            },
            children: [
              {
                index: true,
                async lazy() {
                  const { action: removePostAction, default: ProfilePage } =
                    await import('@pages/home/profile/Profile');

                  return {
                    Component: ProfilePage,
                    action: removePostAction,
                  };
                },
              },
              {
                path: 'edit',
                async lazy() {
                  const {
                    action: editProfileAction,
                    default: EditProfilePage,
                  } = await import('@pages/home/profile/EditProfile');

                  return {
                    Component: EditProfilePage,
                    action: editProfileAction,
                  };
                },
              },
            ],
          },
          {
            path: 'search',
            async lazy() {
              const { default: SearchPage, loader: SearchDataLoader } =
                await import('@pages/home/Search');

              return {
                Component: SearchPage,
                loader: SearchDataLoader,
              };
            },
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
            async lazy() {
              const { default: SignInPage, action: signInAction } =
                await import('@pages/auth/SignIn');

              return {
                Component: SignInPage,
                action: signInAction,
              };
            },
          },
          {
            path: 'signup',
            async lazy() {
              const { default: SignUpPage, action: signUpAction } =
                await import('@pages/auth/SignUp');

              return {
                Component: SignUpPage,
                action: signUpAction,
              };
            },
          },
          {
            path: 'account',
            async lazy() {
              const { default: AccountPage } = await import(
                '@pages/auth/Account'
              );

              return {
                Component: AccountPage,
              };
            },
            children: [
              {
                path: 'id',
                async lazy() {
                  const { default: SearchIDPage, action: searchIDAction } =
                    await import('@pages/auth/account/SearchID');

                  return {
                    Component: SearchIDPage,
                    action: searchIDAction,
                  };
                },
              },
              {
                path: 'password',
                async lazy() {
                  const { default: SearchPWDPage, action: searchPWDAction } =
                    await import('@pages/auth/account/SearchPWD');

                  return {
                    Component: SearchPWDPage,
                    action: searchPWDAction,
                  };
                },
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
