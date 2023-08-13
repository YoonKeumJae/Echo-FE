import { json, redirect } from 'react-router-dom';
import { manipulateComment } from '@services/comment';
import { getCurrentTime } from '@utils/date';

export async function action({ request }) {
  const data = await request.formData();
  const postId = data.get('postId');
  const commentId = data.get('commentId');
  const commentForm = {
    content: data.get('content'),
    updated_at: getCurrentTime(),
  };

  const response = await manipulateComment(postId, commentId, commentForm);

  if (!response.ok) {
    throw json(
      { message: 'Internal Server Error.' },
      { status: response.status },
    );
  }

  return redirect(`/${postId}`);
}
