import { useSearchParams } from 'react-router-dom';

import AccountForm from '@components/auth/account/AccountForm';

const AccountPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  return <AccountForm mode={mode} />;
};

export default AccountPage;
