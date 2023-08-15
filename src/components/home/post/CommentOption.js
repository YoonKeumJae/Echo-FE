import { useSubmit } from 'react-router-dom';
import OptionBox from '@styles/home/post/PostOption-styled';

const CommentOption = ({ postId, commentId, toggleUpdate, commentCount }) => {
  const submit = useSubmit();

  // eslint-disable-next-line no-console
  console.log(commentCount);

  const onRemoveComment = () => {
    const isRemove = window.confirm('댓글을 삭제하시겠습니까?');

    if (isRemove) {
      submit(
        { postId, commentId, commentCount },
        { method: 'delete', action: 'remove' },
      );
      alert('댓글이 정상적으로 삭제되었습니다.');
    }
  };

  return (
    <OptionBox>
      <button onClick={toggleUpdate}>수정</button>
      <button onClick={onRemoveComment}>삭제</button>
    </OptionBox>
  );
};

export default CommentOption;
