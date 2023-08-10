import { Link } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import optionIcon from '@assets/post/optionIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import shareIcon from '@assets/post/shareIcon.png';
import StyledPost from '@styles/home/Post-styled';
import StyledDiv from '@styles/home/PostList-styled';

const PostList = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((post) => (
        <StyledPost key={post.id}>
          <div className='user'>
            <img src={profileIcon} alt={`${post.username} profile icon`} />
            <div className='post-info'>
              <p className='user-name'>{post.username}</p>
              <p className='post-date'>{post.date}</p>
            </div>
            <button className='option'>
              <img src={optionIcon} alt='option icon' />
            </button>
          </div>
          <Link to={post.id}>
            <div className='content'>{post.content}</div>
          </Link>
          <div className='aside'>
            <div className='item'>
              <button>
                <img src={messageIcon} alt='message icon' />
              </button>
              <span>{post.commentCount}</span>
            </div>
            <div className='item'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 50 50'
                fill={post.isLike ? 'red' : 'none'}
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

              <span>{post.like}</span>
            </div>
            <div className='item'>
              <button>
                <img src={shareIcon} alt='share icon' />
              </button>
              <span>공유</span>
            </div>
          </div>
        </StyledPost>
      ))}
    </StyledDiv>
  );
};

export default PostList;
