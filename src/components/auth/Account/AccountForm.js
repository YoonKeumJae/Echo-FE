import { NavLink, Outlet } from 'react-router-dom';

import echoLogo from '@assets/util/echoLogo.png';
import StyledSection from '@styles/auth/account/AccountForm-styled';

const AccountForm = () => {
  return (
    <StyledSection>
      <div className='account-section'>
        <NavLink to='/'>
          <div className='logo'>
            <img src={echoLogo} alt='echo logo' />
          </div>
        </NavLink>

        <Outlet />
      </div>
    </StyledSection>
  );
};

export default AccountForm;
