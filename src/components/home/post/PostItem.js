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
  const isMinePost = userId === currentId;

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
        {isMinePost && <PostOption postId={id} onUpdate={onClickUpdate} />}
      </div>
      {isLink && (
        <Link to={`/${id}`}>
          <div className='content'>{formattedContent}</div>
        </Link>
      )}
      {!isLink && <div className='content'>{formattedContent}</div>}
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
          <span>{likes}</span>
        </div>
        <div className='item'>
          <button>
            <img src={shareIcon} alt='share icon' />
          </button>
          <span>공유</span>
        </div>
      </div>
    </StyledPost>
  );
};

export default PostItem;
