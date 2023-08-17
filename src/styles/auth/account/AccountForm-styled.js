import { styled } from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .account-section {
    width: 360px;
    border: 1px solid #cdcdcd;
    padding: 32px 108px;

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

    .account-mode {
      display: flex;

      a,
      p {
        flex: 1;
        font-size: 18px;

        text-align: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #bcbcbc;
        font-weight: normal;
      }

      .selected {
        font-weight: 600;
        border-bottom: 1px solid #000000;
      }
    }

    .account-form {
      padding: 24px 0 16px;

      .input-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 12px 0;

        label {
          font-weight: 600;
        }

        .input-validation {
          margin-left: 4px;
          font-size: 12px;
          color: red;
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

        .certification-box {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;

          input {
            flex: 1;
          }

          span {
            color: #243dc5;

            font-size: 14px;
          }

          button {
            background: #243dc5;
            color: white;
            font-size: 12px;

            border-radius: 5px;

            width: 64px;
            height: 32px;

            &:hover {
              background: #808080;
            }
          }

          .identify-button {
            font-size: 12px;

            right: 0;
            bottom: -18px;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .submit-button {
        margin-top: 16px;
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

    .disabled {
      cursor: initial;
      background-color: #808080 !important;
      opacity: 0.5;
    }

    .navigation {
      margin: 8px 0;
      text-align: center;

      .navigation-signup {
        font-size: 12px;
        color: #243dc5;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default StyledSection;
