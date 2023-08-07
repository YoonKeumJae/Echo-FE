import FindID from '@components/auth/account/FindID';
import SearchIDForm from '@components/auth/account/SearchIDForm';
import { useSearchParams } from 'react-router-dom';

const SearchIDPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  if (mode === 'findID') return <FindID />;

  return <SearchIDForm />;
};

export default SearchIDPage;
