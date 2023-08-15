import { Suspense } from 'react';
import { Await, defer, json, redirect, useLoaderData } from 'react-router-dom';

import Home from '@components/home/Home';
import PostList from '@components/home/post/PostList';
import { regLineBreak } from '@constants/regular-expression';
import { getPosts, createPost } from '@services/post';
import { getCurrentTime } from '@utils/date';
import store from '@store/configureStore';

const HomePage = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <Home />
      <Suspense
        fallback={
          <h2 style={{ textAlign: 'center', padding: '32px 0' }}>Loading...</h2>
        }
      >
        <Await resolve={posts}>
          {(loadedPosts) => <PostList posts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

export async function action({ request }) {
  const data = await request.formData();

  const currentTime = getCurrentTime();

  const { user } = store.getState();
  const formattedContent = data.get('content').replace(regLineBreak, '\\r\\n');

  const postForm = {
    user_id: user.id,
    nickname: user.nickname,
    content: formattedContent,
    likes: 0,
    comment_count: 0,
    created_at: currentTime,
    updated_at: currentTime,
  };

  const response = await createPost(postForm);

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  return redirect('/');
}

export async function loadPosts() {
  const response = await getPosts();

  if (!response.ok) {
    throw json(
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
    .reverse();

  return posts;
}

export function loader() {
  return defer({
    posts: loadPosts(),
  });
}
