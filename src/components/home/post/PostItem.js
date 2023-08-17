import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import likeIcon from '@assets/post/likeIcon.png';
import shareIcon from '@assets/post/shareIcon.png';
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
    likes,
    user_id: userId,
  } = post;
  const { id: currentId } = useSelector((state) => state.user);

  const date = formatDate(updatedAt);

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
        <button className='item'>
          <img src={likeIcon} alt='like icon' />
          <span>{likes}</span>
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
