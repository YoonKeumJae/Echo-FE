import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import StyledDiv from '@styles/home/post/CommentList-styled';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  const [enteredComment, setEnteredComment] = useState('');
  const { id, nickname } = useSelector((state) => state.user);

  const onEnteredComment = (e) => setEnteredComment(e.target.value);

  return (
    <StyledDiv>
      <div className='comment-list'>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <Form method='post' className='comment-form'>
        <input type='hidden' value={id} name='userId' />
        <input type='hidden' value={nickname} name='nickname' />
        <img src={profileIcon} alt='user profile' />
        <input
          type='text'
          placeholder='댓글을 입력하세요.'
          name='content'
          value={enteredComment}
          onChange={onEnteredComment}
        />
        <button disabled={enteredComment <= 0}>댓글 남기기</button>
      </Form>
    </StyledDiv>
  );
};

export default CommentList;
