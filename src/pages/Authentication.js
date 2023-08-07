import { useSearchParams } from 'react-router-dom';

import Signin from '@components/auth/Signin/Signin';
import Signup from '@components/auth/Signup/Signup';
import Account from '@components/auth/Account/Account';

const AuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  return (
    <>
      {mode === 'signin' && <Signin />}
      {mode === 'signup' && <Signup />}
      {mode === 'account' && <Account />}
    </>
  );
};

export default AuthenticationPage;
