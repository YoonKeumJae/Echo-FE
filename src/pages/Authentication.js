import { useSearchParams } from 'react-router-dom';

import Signin from '@components/auth/signin/Signin';
import Signup from '@components/auth/signup/Signup';
import Account from '@components/auth/account/Account';

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
