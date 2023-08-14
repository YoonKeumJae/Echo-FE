import { Await, defer, json, useRouteLoaderData } from 'react-router-dom';

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
          {(loadedPosts) => <PostList posts={loadedPosts} />}
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

  const posts = Object.entries(resData).map((post) => ({
    id: post[0],
    ...post[1],
  }));

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
  const response = await removePost(id);

  if (!response.ok) {
    throw json(
      { message: 'Internal Server Error.' },
      { status: response.status },
    );
  }

  return null;
}
