import { styled } from 'styled-components';

const StyledSignin = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .signin-section {
    border: 1px solid #cdcdcd;
    padding: 32px 108px;

    .signin-form {
      width: 320px;

      .logo {
        color: #243dc5;
        font-size: 42px;
        text-align: center;
      }

      .description {
        font-size: 24px;
        text-align: center;
        font-weight: 600;
        margin: 16px 0 32px;
      }

      .input-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 12px 0;

        label {
          font-weight: 600;
        }

        input {
          height: 28px;
          padding-inline-start: 8px;
          border: 1px solid #cdcdcd;
          border-radius: 5px;

          &:focus {
            outline: 1px solid #243dc5;
          }

          &::placeholder {
            color: #cdcdcd;
          }
        }
      }

      .submit-button {
        width: 100%;
        border-radius: 5px;
        height: 32px;
        font-weight: 600;
        color: white;
        border: none;

        cursor: pointer;
        background: #243dc5;
      }

      .error-container {
        margin: 8px 0;
        text-align: center;
        color: red;
      }
    }

    .divider {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      color: #000000;
      font-size: 12px;
      margin: 24px 0px;

      &::before,
      &::after {
        content: '';
        flex-grow: 1;
        background: #b9b9b9;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
      }

      p {
        margin: 0 8px;
      }
    }

    .social-login {
      display: flex;

      button {
        flex: 1;
      }
    }

    .navigation {
      font-size: 12px;
      margin-top: 8px;
      text-align: right;
    }

    .link-text {
      font-size: 12px;
      margin-left: 8px;
      text-align: right;
      color: #243dc5;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledSignin;
