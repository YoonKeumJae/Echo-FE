import { styled } from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0 32px;

  div {
    display: flex;
    justify-content: space-between;

    padding: 0 32px;

    &:first-child {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #bcbcbc;
    }

    .find {
      font-weight: 600;
    }
  }

  .login-button {
    margin-top: 64px;

    background: #243dc5;
    border-radius: 5px;
    height: 32px;
    font-weight: 600;

    cursor: pointer;

    & a {
      color: white;
    }
  }
`;

export default StyledDiv;
