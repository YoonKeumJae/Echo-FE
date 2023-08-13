import { json, redirect, useLocation } from 'react-router-dom';
import { manipulatePost } from '@services/post';

import EditPost from '@components/home/post/EditPost';
import { getCurrentTime } from '@utils/date';

const EditPostPage = () => {
  const { state } = useLocation();

  return <EditPost post={state} />;
};

export default EditPostPage;

export async function action({ request }) {
  const data = await request.formData();
  const postId = data.get('postId');
  const commentForm = {
    content: data.get('content'),
    updated_at: getCurrentTime(),
  };

  const response = await manipulatePost(postId, commentForm);

  if (!response.ok) {
    throw json(
      { message: 'Internal Server Error.' },
      { status: response.status },
    );
  }

  return redirect(`/${postId}`);
}
