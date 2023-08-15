import { Link, useSearchParams } from 'react-router-dom';

import profileIcon from '@assets/default/profileIcon.png';
import StyledDiv from '@styles/home/search/UserList-styled';

const UserList = ({ users }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const mode = searchParams.get('mode');

  return (
    <StyledDiv>
      <h3>사람</h3>
      <div className='user-list'>
        {users.map((user) => (
          <div key={user.id} className='user'>
            <Link to={`/profile/${user.id}`}>
              <div className='user-profile'>
                <img
                  src={users.profileImg || profileIcon}
                  alt={`${user.nickname} profile image`}
                />
                <div className='user-info'>
                  <span className='nickname'>{user.nickname}</span>
                  <span>{user.bio}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {mode === 'all' && (
        <div className='more-container'>
          <Link to={`/search?query=${query}&mode=user`}>+ 모두 보기</Link>
        </div>
      )}
    </StyledDiv>
  );
};

export default UserList;
