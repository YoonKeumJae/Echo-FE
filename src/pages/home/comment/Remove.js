import { json, redirect } from 'react-router-dom';
import { removeComment } from '@services/comment';

export async function action({ request }) {
  const data = await request.formData();
  const postId = data.get('postId');
  const commentId = data.get('commentId');
  const commentCount = data.get('commentCount');

  const response = await removeComment(postId, commentId, commentCount);

  if (!response.ok) {
    throw json(
      { message: 'Internal Server Error.' },
      { status: response.status },
    );
  }

  return redirect(`/${postId}`);
}
