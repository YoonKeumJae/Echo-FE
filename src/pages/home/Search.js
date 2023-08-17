import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import PostList from '@components/home/post/PostList';
import SearchForm from '@components/home/search/SearchForm';
import UserList from '@components/home/search/UserList';
import { getUsers } from '@services/user';
import { getPosts } from '@services/post';

const SearchPage = () => {
  const { users, posts, mode } = useLoaderData();

  return (
    <>
      <SearchForm />
      {mode !== 'post' && (
        <Suspense>
          <Await resolve={users}>
            {(loadedUsers) => <UserList users={loadedUsers} />}
          </Await>
        </Suspense>
      )}
      {mode !== 'user' && (
        <Suspense>
          <Await resolve={posts}>
            {(loadedPosts) => <PostList posts={loadedPosts} />}
          </Await>
        </Suspense>
      )}
    </>
  );
};

export default SearchPage;

export async function loadUsers(query, size) {
  const response = await getUsers();
  const resData = await response.json();

  if (!resData) return [];

  const users = Object.entries(resData)
    .map((user, idx) => ({
      ...user[1],
      id: Object.keys(resData)[idx],
    }))
    .reverse()
    .filter((user) => user.nickname.includes(query))
    .slice(0, size);

  return users;
}

export async function loadPosts(query) {
  const response = await getPosts();
  const resData = await response.json();

  if (!resData) return [];

  const posts = Object.entries(resData)
    .map((post) => ({
      id: post[0],
      ...post[1],
    }))
    .filter(
      (post) => post.nickname.includes(query) || post.content.includes(query),
    )
    .reverse();

  return posts;
}

export async function loader({ request }) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const mode = searchParams.get('mode');

  const size = mode === 'all' ? 5 : 10;

  return defer({
    users: loadUsers(query, size),
    posts: loadPosts(query),
    mode,
  });
}
