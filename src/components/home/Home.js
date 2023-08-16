import { useToggle } from 'react-use';

import profileIcon from '@assets/default/profileIcon.png';
import Modal from '@components/common/Modal';
import StyledHome from '@styles/home/Home-styled';
import Write from './write/Write';

const Home = () => {
  const [on, toggle] = useToggle(false);

  return (
    <StyledHome>
      <h3 className='title'>홈</h3>
      <div className='write'>
        <div className='input-container'>
          <img src={profileIcon} alt='user profile' />
          <div className='wrtie-container'>
            <button
              type='text'
              placeholder='게시 할 내용을 입력하세요.'
              onClick={toggle}
            >
              게시 할 내용을 입력하세요.
            </button>
          </div>
        </div>
      </div>
      {on && (
        <Modal onClose={toggle} isChatbot={false}>
          <Write onClose={toggle} />
        </Modal>
      )}
    </StyledHome>
  );
};

export default Home;
