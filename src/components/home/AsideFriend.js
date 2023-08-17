import { useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import searchIcon from '@assets/navigation/searchIcon.png';
import { getUsers } from '@services/user';
import StyledAsideFriend from '@styles/home/AsideFriend';

const AsideFriend = ({ users }) => {
  const [renderedUsers, setRenderedUsers] = useState(users);
  const [isMore, setIsMore] = useState(false);
  const [searchParams] = useSearchParams();
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const isQuery = searchParams.get('query');

  const onSearchQuery = (e) => {
    e.preventDefault();

    if (searchRef.current.value.length <= 0) navigate('/');
    else navigate(`search?query=${searchRef.current.value}&mode=all`);
  };

  const getMoreUsers = async () => {
    const response = await getUsers();
    const resData = await response.json();

    if (!resData) return [];

    const resUsers = Object.entries(resData)
      .map((user, idx) => ({
        ...user[1],
        id: Object.keys(resData)[idx],
      }))
      .reverse()
      .slice(0, Number(renderedUsers.length + 5));

    setIsMore(true);
    setRenderedUsers(resUsers);
  };

  return (
    <StyledAsideFriend>
      {!isQuery && (
        <form onSubmit={onSearchQuery} className='search-query'>
          <img onClick={onSearchQuery} src={searchIcon} alt='search icon' />
          <input
            ref={searchRef}
            type='text'
            placeholder='검색어를 입력하세요.'
          />
        </form>
      )}
      <div className='recommend'>
        <h3 className='title'>친구추천</h3>
        {renderedUsers.map((user) => (
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
          </div>
        ))}
        {!isMore && (
          <div className='more'>
            <button className='more-friend-button' onClick={getMoreUsers}>
              + 더보기
            </button>
          </div>
        )}
      </div>
    </StyledAsideFriend>
  );
};

export default AsideFriend;
