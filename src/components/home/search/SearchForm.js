import { useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import StyledDiv from '@styles/home/search/SearchForm-styled';
import searchIcon from '@assets/navigation/searchIcon.png';

const SearchForm = () => {
  const queryRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const mode = searchParams.get('mode');

  const onSearch = (e) => {
    e.preventDefault();

    if (queryRef.current.value.length <= 0) navigate('/');
    else navigate(`/search?query=${queryRef.current.value}&mode=${mode}`);
  };

  return (
    <StyledDiv>
      <form className='search-form' onSubmit={onSearch}>
        <img src={searchIcon} alt='search icon' />
        <input ref={queryRef} type='text' placeholder='검색어를 입력하세요.' />
      </form>
      <div className='search-section'>
        <Link
          to={`/search?query=${query}&mode=all`}
          className={mode === 'all' ? 'selected' : undefined}
        >
          모두
        </Link>
        <Link
          to={`/search?query=${query}&mode=post`}
          className={mode === 'post' ? 'selected' : undefined}
        >
          게시물
        </Link>
        <Link
          to={`/search?query=${query}&mode=user`}
          className={mode === 'user' ? 'selected' : undefined}
        >
          사람
        </Link>
      </div>
    </StyledDiv>
  );
};

export default SearchForm;
