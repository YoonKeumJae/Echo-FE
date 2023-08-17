import { useEffect, useRef } from 'react';
import { useToggle } from 'react-use';
import { useSelector } from 'react-redux';
import { useLocation, useSubmit } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import likeIcon from '@assets/post/likeIcon.png';
import StyledDiv from '@styles/home/post/CommentItem-styled';
import { formatDate } from '@utils/date';
import CommentOption from './CommentOption';

const CommentItem = ({ comment, totCount }) => {
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
          <CommentOption
            commentCount={totCount}
            postId={postId}
            commentId={id}
            toggleUpdate={toggle}
          />
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
          <button>
            <img src={likeIcon} alt='like icon' />
          </button>
          <span>{like}</span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CommentItem;
