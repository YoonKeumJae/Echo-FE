import searchIcon from '@assets/searchIcon.png';
import profileIcon from '@assets/profileIcon.png';
import StyledAsideFriend from '@styles/home/AsideFriend';

const DUMMY_FRIENDS = [
  {
    id: '',
    profile: '',
    name: '이동혁',
  },
  {
    id: '',
    profile: '',
    name: '이제노',
  },
  {
    id: '',
    profile: '',
    name: '김정우',
  },
  {
    id: '',
    profile: '',
    name: '김도영',
  },
  {
    id: '',
    profile: '',
    name: '황인준',
  },
  {
    id: '',
    profile: '',
    name: '박지성',
  },
  {
    id: '',
    profile: '',
    name: '나재민',
  },
];

const AsideFriend = () => {
  return (
    <StyledAsideFriend>
      <div className='search-query'>
        <img src={searchIcon} alt='search icon' />
        <input type='text' placeholder='검색어를 입력하세요.' />
      </div>
      <div className='recommend'>
        <h3 className='title'>친구추천</h3>
        {DUMMY_FRIENDS.map((friend) => (
          <div key={friend.id} className='user'>
            <div className='friend'>
              <img src={profileIcon} alt={`${friend.name} profile image`} />
              <span>{friend.name}</span>
            </div>
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
