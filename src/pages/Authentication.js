import { useSearchParams } from 'react-router-dom';

import Signin from '@components/auth/Signin';
import Signup from '@components/auth/Signup';

const AuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  return (
    <>
      {mode === 'signin' && <Signin />}
      {mode === 'signup' && <Signup />}
      {mode === 'account' && 'ACCOUNT'}
    </>
  );
};

export default AuthenticationPage;
