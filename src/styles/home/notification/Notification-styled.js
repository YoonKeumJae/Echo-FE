import { styled } from 'styled-components';

const StyledNotification = styled.div`
  .title {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .notification-list {
    display: flex;
    flex-direction: column;

    .notification {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 8px 0;

      &:first-child {
        border-top: 1px solid #d9d9d9;
      }

      border-bottom: 1px solid #d9d9d9;

      .message {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 32px;
        }
      }

      .button-box {
        button {
          margin: 0 8px;
          background: #243dc5;
          color: white;
          width: 48px;
          height: 24px;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default StyledNotification;
