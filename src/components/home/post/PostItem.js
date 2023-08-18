import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import shareIcon from '@assets/post/shareIcon.png';
import { likePost } from '@services/post';
import StyledPost from '@styles/home/post/Post-styled';
import { formatDate } from '@utils/date';
import PostOption from './PostOption';

const PostItem = ({ post }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    id,
    nickname,
    comment_count: commentCount,
    content,
    updated_at: updatedAt,
    user_id: userId,
    liked_users: likedUsers,
  } = post;
  const { id: currentId } = useSelector((state) => state.user);
  const [isClickLike, setIsClickLike] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const date = formatDate(updatedAt);

  useEffect(() => {
    const isLike = likedUsers
      ? Object.values(likedUsers).includes(currentId)
      : false;
    const likes = likedUsers ? Object.values(likedUsers).length : 0;

    setIsClickLike(isLike);
    setClickCount(likes);
  }, [likedUsers, currentId]);

  const isLink = pathname === '/' || pathname.includes('profile');
  const isMinePost = userId === currentId && pathname.includes('profile');

  const formattedContent = content.split('\\r\\n').map((line, index) => {
    if (line === '') return null;

    return (
      <p key={index}>
        {line}
        <br />
      </p>
    );
  });

  const onClickUpdate = () => navigate(`/${id}/update`, { state: post });
  const onClickLikePost = async () => {
    if (isClickLike) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in likedUsers) {
        if (likedUsers[key] === currentId) {
          delete likedUsers[key];
          break; // Once found and deleted, exit the loop
        }
      }

      setIsClickLike(false);
      setClickCount((prev) => prev - 1);
      await likePost(id, likedUsers || {});
      return;
    }

    const addLikedUsers =
      clickCount > 0 ? (likedUsers[currentId] = currentId) : { id: currentId };

    setIsClickLike(true);
    setClickCount((prev) => prev + 1);
    await likePost(id, addLikedUsers);
  };

  const onCopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href + id);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <StyledPost>
      <div className='user'>
        <Link to={`/profile/${userId}`}>
          <img src={profileIcon} alt={`${nickname} profile icon`} />
        </Link>
        <div className='post-info'>
          <p className='user-name'>{nickname}</p>
          <p className='post-date'>{date}</p>
        </div>
        {isMinePost && (
          <PostOption postId={id} onUpdate={onClickUpdate} userId={userId} />
        )}
      </div>
      {isLink && (
        <Link to={`/${id}`}>
          <div className='content'>
            {content.replace(/\\r\\n/g, ' ').slice(0, 360)}

            <p style={{ margin: '16px 0 0' }}>
              {content.length >= 360 && '더보기.....'}
            </p>
          </div>
        </Link>
      )}
      {!isLink && <div className='content'>{formattedContent}</div>}
      <div className='aside'>
        <button className='item'>
          <img src={messageIcon} alt='message icon' />
          <span>{commentCount}</span>
        </button>
        <button className='item' onClick={onClickLikePost}>
          {/* {isLike && <img src={clickedLikeIcon} alt='clicked like icon' />}
          {!isLike && <img src={likeIcon} alt='like icon' />} */}
          <svg
            width='24'
            height='24'
            viewBox='0 0 50 50'
            fill={isClickLike ? 'red' : 'none'}
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
          <span>{clickCount}</span>
        </button>
        <button className='item' onClick={onCopyToClipBoard}>
          <img src={shareIcon} alt='share icon' />
          <span>공유</span>
        </button>
      </div>
    </StyledPost>
  );
};

export default PostItem;
