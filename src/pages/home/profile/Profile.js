import { Await, defer, json, useRouteLoaderData } from 'react-router-dom';

import { Suspense } from 'react';

import Profile from '@components/home/profile/Profile';
import PostList from '@components/home/post/PostList';
// import { getUser } from '@services/user';
import { getPosts } from '@services/post';

const ProfilePage = () => {
  const { posts } = useRouteLoaderData('profile-detail');

  const DUMMY_USER = {
    background_img: '',
    profile_img: '',
    username: 'Test',
    bio: 'Test님의 한줄 요약',
  };

  return (
    <>
      <Profile user={DUMMY_USER} />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={posts}>
          {(loadedPosts) => <PostList posts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ProfilePage;

// export async function loadUser() {
//   const response = await getUser();

//   if (!response.ok) {
//     return json(
//       { message: 'Could not found user.' },
//       { status: response.status },
//     );
//   }

//   const resData = await response.json();
//   return resData.user;
// }

export async function loadPosts() {
  const response = await getPosts();

  if (!response.ok) {
    return json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  const posts = Object.entries(resData).map((post) => ({
    id: post[0],
    ...post[1],
  }));

  return posts;
}

export function loader() {
  return defer({
    // user: loadUser(),
    posts: loadPosts(),
  });
}
