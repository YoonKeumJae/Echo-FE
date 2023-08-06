import profileIcon from '@assets/profileIcon.png';
import optionIcon from '@assets/optionIcon.png';
import messageIcon from '@assets/messageIcon.png';
import shareIcon from '@assets/shareIcon.png';

const DUMMY_POSTS = [
  {
    id: 1,
    profile: '',
    username: '이민형',
    date: '2분전',
    content: `I don't know how to make eggs, But that I do not stress Cause I've never been hungry`,
    commentCount: 1,
    like: 82,
    isLike: true,
  },
  {
    id: 2,
    profile: '',
    username: '이민형',
    date: '5분전',
    content: `I don't know how to make eggs, But that I do not stress Cause I've never been hungry`,
    commentCount: 1,
    like: 21,
    isLike: false,
  },
  {
    id: 3,
    profile: '',
    username: '이민형',
    date: '5분전',
    content: `I don't know how to make eggs, But that I do not stress Cause I've never been hungry`,
    commentCount: 1,
    like: 21,
    isLike: true,
  },
  {
    id: 4,
    profile: '',
    username: '이민형',
    date: '5분전',
    content: `I don't know how to make eggs, But that I do not stress Cause I've never been hungry`,
    commentCount: 1,
    like: 21,
    isLike: true,
  },
  {
    id: 5,
    profile: '',
    username: '이민형',
    date: '5분전',
    content: `I don't know how to make eggs, But that I do not stress Cause I've never been hungry`,
    commentCount: 1,
    like: 21,
    isLike: false,
  },
];

const HomePage = () => {
  return (
    <div>
      <div className='top'>
        <h3 className='title'>홈</h3>
        <div className='write'>
          <div className='input-container'>
            <img src={profileIcon} alt='user profile' />
            <button type='text' placeholder='게시 할 내용을 입력하세요.'>
              게시 할 내용을 입력하세요.
            </button>
          </div>
        </div>
      </div>
      <div className='post-list'>
        {DUMMY_POSTS.map((post) => (
          <div key={post.id} className='post'>
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
            <div className='content'>{post.content}</div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
