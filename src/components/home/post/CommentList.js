import { useState } from 'react';
import { Form } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import StyledDiv from '@styles/home/post/CommentList-styled';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  const [enteredComment, setEnteredComment] = useState('');
  const user = localStorage.getItem('user');

  const onEnteredComment = (e) => setEnteredComment(e.target.value);

  return (
    <StyledDiv>
      <div className='comment-list'>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <Form method='post' className='comment-form'>
        <input type='hidden' value={user} name='userId' />
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
