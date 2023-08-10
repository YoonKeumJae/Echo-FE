import profileIcon from '@assets/default/profileIcon.png';
import StyledHome from '@styles/home/Home-styled';

const Home = () => {
  return (
    <StyledHome>
      <h3 className='title'>홈</h3>
      <div className='write'>
        <div className='input-container'>
          <img src={profileIcon} alt='user profile' />
          <button type='text' placeholder='게시 할 내용을 입력하세요.'>
            게시 할 내용을 입력하세요.
          </button>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
