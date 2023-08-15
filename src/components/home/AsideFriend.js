import { Link, useNavigate } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import searchIcon from '@assets/navigation/searchIcon.png';
import StyledAsideFriend from '@styles/home/AsideFriend';
import { useRef } from 'react';

const AsideFriend = ({ users }) => {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const onSearchQuery = (e) => {
    e.preventDefault();

    if (searchRef.current.value.length <= 0) navigate('/');
    else navigate(`search?query=${searchRef.current.value}`);
  };

  return (
    <StyledAsideFriend>
      <form onSubmit={onSearchQuery} className='search-query'>
        <img src={searchIcon} alt='search icon' />
        <input ref={searchRef} type='text' placeholder='검색어를 입력하세요.' />
      </form>
      <div className='recommend'>
        <h3 className='title'>친구추천</h3>
        {users.map((user) => (
          <div key={user.id} className='user'>
            <Link to={`profile/${user.id}`}>
              <div className='friend'>
                <img
                  src={users.profileImg || profileIcon}
                  alt={`${user.nickname} profile image`}
                />
                <span>{user.nickname}</span>
              </div>
            </Link>
            <button className='add-button'>추가</button>
          </div>
        ))}
        <div className='more'>
          <button className='more-friend-button'>+ 더보기</button>
        </div>
      </div>
    </StyledAsideFriend>
  );
};

export default AsideFriend;
