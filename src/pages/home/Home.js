import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import Home from '@components/home/Home';
import PostList from '@components/home/PostList';
import { getPosts } from '@services/post';

const HomePage = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <Home />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={posts}>
          {(loadedPosts) => <PostList posts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

export async function loadPosts() {
  const response = await getPosts();

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  return resData;
}

export function loader() {
  return defer({
    posts: loadPosts(),
  });
}
