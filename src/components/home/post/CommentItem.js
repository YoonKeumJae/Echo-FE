import { useEffect, useRef } from 'react';
import { useToggle } from 'react-use';
import { useSelector } from 'react-redux';
import { useLocation, useSubmit } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import StyledDiv from '@styles/home/post/CommentItem-styled';
import { formatDate } from '@utils/date';
import CommentOption from './CommentOption';

const CommentItem = ({ comment }) => {
  const [isUpdate, toggle] = useToggle(false);
  const { pathname } = useLocation();
  const updatedCommentRef = useRef();
  const submit = useSubmit();
  const {
    id,
    nickname,
    user_id: userId,
    updated_at: updatedAt,
    content,
    commentCount,
    like,
  } = comment;
  const date = formatDate(updatedAt);
  const { id: current } = useSelector((state) => state.user);
  const postId = pathname.split('/')[1];
  const isMineComment = userId === current;

  useEffect(() => {
    if (isUpdate && updatedCommentRef.current) {
      updatedCommentRef.current.focus();
    }
  }, [isUpdate]);

  const onManipulateComment = (e) => {
    e.preventDefault();
    const isConfirm = window.confirm('수정하시겠습니까?');

    if (!isConfirm) return null;

    submit(
      { postId, content: updatedCommentRef.current.value, commentId: id },
      { method: 'patch', action: 'edit' },
    );
    toggle();
  };

  return (
    <StyledDiv>
      <div className='user'>
        <img src={profileIcon} alt={`${nickname} profile icon`} />
        <div className='post-info'>
          <p className='user-name'>{nickname}</p>
          <p className='post-date'>{date}</p>
        </div>
        {!isUpdate && isMineComment && (
          <CommentOption postId={postId} commentId={id} toggleUpdate={toggle} />
        )}
      </div>
      {isUpdate && (
        <form className='content' onSubmit={onManipulateComment}>
          <textarea ref={updatedCommentRef} defaultValue={content} />
          <button>수정하기</button>
        </form>
      )}
      {!isUpdate && <div className='content'>{content}</div>}
      <div className='aside'>
        <div className='item'>
          <button>
            <img src={messageIcon} alt='message icon' />
          </button>
          <span>{commentCount}</span>
        </div>
        <div className='item'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.625 8.33325C9.29688 8.33325 4.16667 13.4635 4.16667 19.7916C4.16667 31.2499 17.7083 41.6666 25 44.0895C32.2917 41.6666 45.8333 31.2499 45.8333 19.7916C45.8333 13.4635 40.7031 8.33325 34.375 8.33325C30.5 8.33325 27.0729 10.2572 25 13.202C23.9434 11.697 22.5398 10.4688 20.9079 9.62126C19.2759 8.77376 17.4639 8.33195 15.625 8.33325Z'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>{like}</span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CommentItem;
