import { json, defer, useLoaderData, Await } from 'react-router-dom';

import { getPost } from '@services/post';
import Post from '@components/home/Post';
import { Suspense } from 'react';

const PostDetailPage = () => {
  const { post } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={post}>{(loadedPost) => <Post post={loadedPost} />}</Await>
    </Suspense>
  );
};

export default PostDetailPage;

// async function loadComments(id) {
//   const response = await getComments(id);

//   if (!response.ok) {
//     throw json(
//       { message: 'Could not found posts.' },
//       { status: response.status },
//     );
//   }

//   const resData = await response.json();
//   return resData;
// }

async function loadPost(id) {
  const response = await getPost(id);

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  return resData;
}

export async function loader({ params }) {
  const id = params.postId;
  return defer({
    post: await loadPost(id),
    // comments: await loadComments(id).
  });
}
