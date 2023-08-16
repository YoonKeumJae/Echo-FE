import { NavLink } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import homeIcon from '@assets/navigation/homeIcon.png';
import notificationIcon from '@assets/navigation/notificationIcon.png';
import noteIcon from '@assets/navigation/noteIcon.png';
import StyledMainNavigation from '@styles/home/MainNavigation-styled';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  const { id, nickname } = useSelector((state) => state.user);

  return (
    <StyledMainNavigation>
      <div className='item logo'>LOGO</div>
      <div className='item'>
        <NavLink
          to={`/profile/${id}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <img src={profileIcon} alt='user profile' width='32' />
          <span>{nickname}</span>
        </NavLink>
      </div>
      <div className='item'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          end
        >
          <img src={homeIcon} alt='home navigation' width='32' />
          <span>홈</span>
        </NavLink>
      </div>
      <div className='item'>
        <NavLink
          to='/notification'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <img
            src={notificationIcon}
            alt='notification navigation'
            width='32'
          />
          <span>알림</span>
        </NavLink>
      </div>
      <div className='item'>
        <NavLink
          to='/note'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <img
            src={noteIcon}
            alt='note navigation'
            width='28'
            style={{ paddingLeft: '2px' }}
          />
          <span>쪽지</span>
        </NavLink>
      </div>
      <div className='item'>
        <NavLink to='/logout'>
          <span>로그아웃</span>
        </NavLink>
      </div>
    </StyledMainNavigation>
  );
};

export default MainNavigation;
