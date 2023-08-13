import { Link, useLocation } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import shareIcon from '@assets/post/shareIcon.png';
import StyledPost from '@styles/home/post/Post-styled';
import { formatDate } from '@utils/date';
import PostOption from './PostOption';

const PostItem = ({ post }) => {
  const { pathname } = useLocation();
  const {
    id,
    commentCount,
    content,
    updated_at: updatedAt,
    likes,
    user_id: username,
  } = post;

  const date = formatDate(updatedAt);

  const isLink = pathname === '/' || pathname === '/profile';
  const isMinePost =
    pathname === '/profile' && username === localStorage.getItem('user');

  const formattedContent = content.split('\\r\\n').map((line, index) => {
    if (line === '') return null;

    return (
      <p key={index}>
        {line}
        <br />
      </p>
    );
  });

  return (
    <StyledPost>
      <div className='user'>
        <img src={profileIcon} alt={`${username} profile icon`} />
        <div className='post-info'>
          <p className='user-name'>{username}</p>
          <p className='post-date'>{date}</p>
        </div>
        {isMinePost && <PostOption postId={id} />}
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
          <svg
            width='28'
            height='28'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.625 8.33325C9.29688 8.33325 4.16667 13.4635 4.16667 19.7916C4.16667 31.2499 17.7083 41.6666 25 44.0895C32.2917 41.6666 45.8333 31.2499 45.8333 19.7916C45.8333 13.4635 40.7031 8.33325 34.375 8.33325C30.5 8.33325 27.0729 10.2572 25 13.202C23.9434 11.697 22.5398 10.4688 20.9079 9.62126C19.2759 8.77376 17.4639 8.33195 15.625 8.33325Z'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

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
