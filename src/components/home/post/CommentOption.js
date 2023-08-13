import { useLocation, useSubmit } from 'react-router-dom';
import OptionBox from '@styles/home/post/PostOption-styled';

const CommentOption = ({ commentId }) => {
  const { pathname } = useLocation();
  const postId = pathname.split('/')[1];
  const submit = useSubmit();

  const onUpdateComment = () => {
    const isUpdate = window.confirm('댓글을 수정하시겠습니까?');

    if (isUpdate) {
      alert('댓글이 정상적으로 수정되었습니다.');
    }
  };

  const onRemoveComment = () => {
    const isRemove = window.confirm('댓글을 삭제하시겠습니까?');

    if (isRemove) {
      submit({ postId, commentId }, { method: 'delete', action: 'remove' });
      alert('댓글이 정상적으로 삭제되었습니다.');
    }
  };

  return (
    <OptionBox>
      <button onClick={onUpdateComment}>수정</button>
      <button onClick={onRemoveComment}>삭제</button>
    </OptionBox>
  );
};

export default CommentOption;
