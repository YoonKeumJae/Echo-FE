import profileIcon from '@assets/default/profileIcon.png';
import StyledDiv from '@styles/home/post/CommentList-styled';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <StyledDiv>
      <div className='comment-list'>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <form className='comment-form'>
        <img src={profileIcon} alt='user profile' />
        <input type='text' placeholder='댓글을 입력하세요.' />
        <button>댓글 남기기</button>
      </form>
    </StyledDiv>
  );
};

export default CommentList;
