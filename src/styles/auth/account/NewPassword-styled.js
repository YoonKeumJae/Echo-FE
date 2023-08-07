import { styled } from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0 32px;
  width: 360px;

  .find-id {
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

  .newPassword-form {
    .input-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 6px;

      margin: 4px 0;

      label {
        width: 90px;
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
    }
    .button-container {
      display: flex;
      margin-top: 16px;
      gap: 8px;

      button {
        flex: 1;
        border-radius: 5px;
        height: 32px;
        font-weight: 600;
        color: white;
        border: none;

        cursor: pointer;
        background: #243dc5;
      }
    }
  }
`;

export default StyledDiv;
