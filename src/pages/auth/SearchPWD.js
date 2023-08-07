import NewPassword from '@components/auth/account/NewPassword';
import SearchPWDForm from '@components/auth/account/SearchPWDForm';
import { useSearchParams } from 'react-router-dom';

const SearchPWDPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  if (mode === 'findPWD') return <NewPassword />;

  return <SearchPWDForm />;
};

export default SearchPWDPage;
