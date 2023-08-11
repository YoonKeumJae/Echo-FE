import { Suspense } from 'react';
import { json, defer, useLoaderData, Await } from 'react-router-dom';

import { getPost } from '@services/post';
import PostItem from '@components/home/post/PostItem';
import CommentList from '@components/home/post/CommentList';

const DUMMY_COMMENTS = [
  {
    id: 1,
    profile: '',
    username: '이동혁',
    date: '1분전',
    content: 'dd',
    commentCount: '0',
    like: '3',
    isLike: false,
  },
  {
    id: 2,
    profile: '',
    username: '이동혁',
    date: '3분전',
    content: 'ㅎㅇㅁㄴㅀㅁㄴㅇㅎㅇㄴㅁㅎㄴㅇㅁ',
    commentCount: '0',
    like: '1',
    isLike: true,
  },
  {
    id: 3,
    profile: '',
    username: '이동혁',
    date: '5분전',
    content: 'gasgasdgsadgsadgsdangldss',
    commentCount: '0',
    like: '1',
    isLike: false,
  },
];

const PostDetailPage = () => {
  const { post } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={post}>
          {(loadedPost) => <PostItem post={loadedPost} />}
        </Await>
      </Suspense>
      <CommentList comments={DUMMY_COMMENTS} />
    </>
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
