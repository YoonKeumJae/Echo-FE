import { styled } from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid #d9d9d9;

  .user {
    position: relative;
    display: flex;

    img {
      width: 32px;
      height: 32px;
    }

    .post-info {
      margin-left: 8px;
      .user-name {
        font-weight: 600;
      }

      .post-date {
        font-size: 12px;
        color: #6b6b6b;
      }
    }

    .option {
      position: absolute;
      right: 0;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    padding: 16px 40px 8px;

    textarea {
      flex: 1;
      height: 64px;
      padding: 8px 4px;
      resize: none;
      border: 1px solid #ccc;

      &:hover {
        outline: none;
      }
    }

    button {
      position: absolute;

      background-color: #243dc5;
      color: white;

      padding: 4px 8px;
      border-radius: 15px;

      right: 48px;
      bottom: 16px;
    }
  }

  .aside {
    padding: 16px 40px 0;
    display: flex;
    justify-content: space-between;

    .item {
      display: flex;
      align-items: center;
      gap: 4px;

      img {
        width: 28px;
      }

      span {
        font-size: 16px;
      }
    }
  }

  .aside {
    justify-content: start;
    gap: 8px;
    padding: 0 40px 8px;

    img {
      width: 24px;
    }
  }
`;

export default StyledDiv;
