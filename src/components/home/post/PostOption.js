import { useSubmit } from 'react-router-dom';
import OptionBox from '@styles/home/post/PostOption-styled';

const PostOption = ({ postId }) => {
  const submit = useSubmit();
  const onUpdatePost = () => {
    const isUpdate = window.confirm('게시물을 수정하시겠습니까?');

    if (isUpdate) {
      alert('게시물이 정상적으로 수정되었습니다.');
    }
  };

  const onRemovePost = () => {
    const isRemove = window.confirm('게시물을 삭제하시겠습니까?');

    if (isRemove) {
      submit({ postId }, { method: 'delete' });
      alert('게시물이 정상적으로 삭제되었습니다.');
    }
  };

  return (
    <OptionBox>
      <button onClick={onUpdatePost}>수정</button>
      <button onClick={onRemovePost}>삭제</button>
    </OptionBox>
  );
};

export default PostOption;
