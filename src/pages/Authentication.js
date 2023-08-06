import { useSearchParams } from 'react-router-dom';

import Signin from '@components/Signin';
import Signup from '@components/Signup';

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
