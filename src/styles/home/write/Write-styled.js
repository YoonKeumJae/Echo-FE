import styled from 'styled-components';

const WriteDiv = styled.div`
  padding: 8px 16px;
  width: 496px;

  .header {
    display: flex;
    justify-content: space-between;

    .user {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 32px;
        height: 32px;
      }

      .user-name {
        font-weight: 600;
      }

      .post-date {
        font-size: 12px;
        color: #6b6b6b;
      }
    }

    .close {
      border: none;
      background: none;
      font-size: 20px;

      cursor: pointer;
    }
  }

  .content-form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    textarea {
      height: 196px;
      font-size: 24px;
      resize: none;
      border: none;

      &:focus {
        outline: none;
      }

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 10px;
        background-clip: padding-box;
        border: 1px solid transparent;
      }

      &::-webkit-scrollbar-track {
        background-color: #e4e6eb;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px white;
      }
    }

    button {
      border: none;
      height: 48px;
      border-radius: 10px;
      background: #243dc5;

      color: white;
      font-size: 22px;

      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        background: #e4e6eb;
      }
    }
  }
`;

export default WriteDiv;
