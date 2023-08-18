import {
  Await,
  defer,
  json,
  redirectDocument,
  useRouteLoaderData,
} from 'react-router-dom';

import { Suspense } from 'react';

import Profile from '@components/home/profile/Profile';
import PostList from '@components/home/post/PostList';
import { getUser } from '@services/user';
import { getPosts, removePost } from '@services/post';

const ProfilePage = () => {
  const { id, user, posts } = useRouteLoaderData('profile-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={user}>
          {(loadedUser) => <Profile id={id} user={loadedUser} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={posts}>
          {(loadedPosts) => {
            // eslint-disable-next-line no-console
            if (loadedPosts.length === 0)
              return (
                <h3 style={{ textAlign: 'center', marginTop: '64px' }}>
                  현재 게시물이 존재하지 않습니다.
                </h3>
              );
            return <PostList posts={loadedPosts} />;
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default ProfilePage;

export async function loadUser(id) {
  const response = await getUser(id);

  if (!response.ok) {
    return json(
      { message: 'Could not found user.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  return resData;
}

export async function loadPosts(id) {
  const response = await getPosts(id);

  if (!response.ok) {
    return json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  if (!resData) return [];

  const posts = Object.entries(resData)
    .map((post) => ({
      id: post[0],
      ...post[1],
    }))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return posts;
}

export function loader({ params }) {
  const id = params.userId;

  return defer({
    user: loadUser(id),
    posts: loadPosts(id),
    id,
  });
}

export async function action({ request }) {
  const data = await request.formData();
  const id = data.get('postId');
  const userId = data.get('userId');
  const response = await removePost(id);

  if (!response.ok) {
    throw json(
      { message: 'Internal Server Error.' },
      { status: response.status },
    );
  }

  return redirectDocument(`/profile/${userId}`);
}
