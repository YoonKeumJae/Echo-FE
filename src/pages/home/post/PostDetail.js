import { Suspense } from 'react';
import { json, defer, Await, useRouteLoaderData } from 'react-router-dom';

import { getPost } from '@services/post';
import PostItem from '@components/home/post/PostItem';
import CommentList from '@components/home/post/CommentList';
import { addComment, getComments } from '@services/comment';
import { getCurrentTime } from '@utils/date';

const PostDetailPage = () => {
  const { post, comments } = useRouteLoaderData('post-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={post}>
          {(loadedPost) => <PostItem post={loadedPost} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={comments}>
          <CommentList comments={comments} />
        </Await>
      </Suspense>
    </>
  );
};

export default PostDetailPage;

async function loadComments(id) {
  const response = await getComments(id);

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();

  if (!resData) return [];

  const comments = Object.entries(resData).map((comment) => ({
    id: comment[0],
    ...comment[1],
  }));

  return comments;
}

async function loadPost(id) {
  const response = await getPost(id);

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  const resData = await response.json();
  const post = { id, ...resData };
  return post;
}

export async function loader({ params }) {
  const id = params.postId;

  return defer({
    post: await loadPost(id),
    comments: await loadComments(id),
  });
}

export async function action({ request, params }) {
  const id = params.postId;
  const data = await request.formData();
  const currentTime = getCurrentTime();
  const commentForm = {
    post_id: id,
    user_id: data.get('userId'),
    nickname: data.get('nickname'),
    likes: 0,
    content: data.get('content'),
    created_at: currentTime,
    updated_at: currentTime,
  };
  const commentCount = data.get('commentCount');

  const response = await addComment(id, commentForm, commentCount);

  if (!response.ok) {
    throw json(
      { message: 'Could not found posts.' },
      { status: response.status },
    );
  }

  return null;
}
