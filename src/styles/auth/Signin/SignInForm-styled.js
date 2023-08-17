import { styled } from 'styled-components';

const StyledSection = styled.section`
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
        margin: 4px 0 32px;
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
  }
`;

export default StyledSection;
