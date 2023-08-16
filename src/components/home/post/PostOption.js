import { useSubmit } from 'react-router-dom';
import OptionBox from '@styles/home/post/PostOption-styled';

const PostOption = ({ postId, onUpdate, userId }) => {
  const submit = useSubmit();

  const onRemovePost = () => {
    const isRemove = window.confirm('게시물을 삭제하시겠습니까?');

    if (isRemove) {
      submit({ postId, userId }, { method: 'DELETE' });
      alert('게시물이 정상적으로 삭제되었습니다.');
    }
  };

  return (
    <OptionBox>
      <button onClick={onUpdate}>수정</button>
      <button onClick={onRemovePost}>삭제</button>
    </OptionBox>
  );
};

export default PostOption;
