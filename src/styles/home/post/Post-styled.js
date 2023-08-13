import { styled } from 'styled-components';

const StyledPost = styled.div`
  padding: 8px;
  background: #fcfcfc;

  .back {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid #dbdbdb;

    img {
      width: 28px;
      vertical-align: middle;
    }

    span {
      font-size: 20px;
    }
  }

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
    padding: 16px 40px 8px;
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

  .comment-container {
    .comment-list {
      margin-top: 16px;
      padding: 8px 0;

      border-top: 1px solid #d9d9d9;

      display: flex;
      flex-direction: column;
      gap: 12px;

      .comment {
        border-bottom: 1px solid #d9d9d9;

        .aside {
          justify-content: start;
          gap: 8px;
          padding: 0 40px 8px;

          img {
            width: 24px;
          }
        }
      }
    }

    .comment-form {
      position: relative;
      display: flex;
      align-items: center;
      padding: 8px 0 32px;

      img {
        width: 32px;
      }

      input {
        flex: 1;
        border: none;
        background: transparent;
        padding-inline-start: 8px;

        &:focus {
          outline: none;
        }
      }

      button {
        position: absolute;
        bottom: 0;
        right: 0;

        background: #243dc5;
        color: white;

        border-radius: 15px;

        width: 96px;
        height: 24px;
      }
    }
  }
`;

export default StyledPost;
