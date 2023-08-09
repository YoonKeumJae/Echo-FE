import { NavLink, Outlet } from 'react-router-dom';

import StyledSection from '@styles/auth/account/AccountForm-styled';

const AccountForm = () => {
  return (
    <StyledSection>
      <div className='account-section'>
        <NavLink to='/'>
          <h2 className='logo'>Logo</h2>
        </NavLink>

        <Outlet />
      </div>
    </StyledSection>
  );
};

export default AccountForm;
