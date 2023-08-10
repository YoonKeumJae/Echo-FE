import { Link } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import backIcon from '@assets/post/backIcon.png';
import optionIcon from '@assets/post/optionIcon.png';
import messageIcon from '@assets/post/messageIcon.png';
import shareIcon from '@assets/post/shareIcon.png';
import StyledPost from '@styles/home/Post-styled';

const DUMMY_COMMENTS = [
  {
    id: 1,
    profile: '',
    username: '이동혁',
    date: '1분전',
    content: 'dd',
    commentCount: '0',
    like: '3',
    isLike: false,
  },
  {
    id: 2,
    profile: '',
    username: '이동혁',
    date: '3분전',
    content: 'ㅎㅇㅁㄴㅀㅁㄴㅇㅎㅇㄴㅁㅎㄴㅇㅁ',
    commentCount: '0',
    like: '1',
    isLike: true,
  },
  {
    id: 3,
    profile: '',
    username: '이동혁',
    date: '5분전',
    content: 'gasgasdgsadgsadgsdangldss',
    commentCount: '0',
    like: '1',
    isLike: false,
  },
];

const Post = ({ post }) => {
  // eslint-disable-next-line no-console
  console.log(post);

  const { commentCount, content, date, like, username } = post;

  const isLike = true;

  return (
    <StyledPost>
      <Link to='/' className='back'>
        <button>
          <img src={backIcon} alt='back icon' />
        </button>
        <span>게시글</span>
      </Link>
      <div className='user'>
        <img src={profileIcon} alt={`${username} profile icon`} />
        <div className='post-info'>
          <p className='user-name'>{username}</p>
          <p className='post-date'>{date}</p>
        </div>
        <button className='option'>
          <img src={optionIcon} alt='option icon' />
        </button>
      </div>
      <div className='content'>{content}</div>
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
            fill={isLike ? 'red' : 'none'}
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

          <span>{like}</span>
        </div>
        <div className='item'>
          <button>
            <img src={shareIcon} alt='share icon' />
          </button>
          <span>공유</span>
        </div>
      </div>
      <div className='comment'>
        <div className='comment-list'>
          {DUMMY_COMMENTS.map((comment) => (
            <div key={comment.id} className='comment'>
              <div className='user'>
                <img
                  src={profileIcon}
                  alt={`${comment.username} profile icon`}
                />
                <div className='post-info'>
                  <p className='user-name'>{comment.username}</p>
                  <p className='post-date'>{comment.date}</p>
                </div>
              </div>
              <div className='content'>{comment.content}</div>
              <div className='aside'>
                <div className='item'>
                  <button>
                    <img src={messageIcon} alt='message icon' />
                  </button>
                  <span>{comment.commentCount}</span>
                </div>
                <div className='item'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 50 50'
                    fill={comment.isLike ? 'red' : 'none'}
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
                  <span>{comment.like}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className='comment-form'>
          <img src={profileIcon} alt='user profile' />
          <input type='text' placeholder='댓글을 입력하세요.' />
          <button>댓글 남기기</button>
        </form>
      </div>
    </StyledPost>
  );
};

export default Post;
