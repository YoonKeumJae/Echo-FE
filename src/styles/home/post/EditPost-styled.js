import styled from 'styled-components';

const StyledDiv = styled.div`
  .header {
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

  form {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 172px;

    .content {
      flex: 1;
      padding: 8px 4px;

      resize: none;
    }

    .submit-container {
      text-align: right;

      button {
        padding: 8px 16px;
        border-radius: 15px;

        background-color: #243dc5;
        color: #ffffff;
      }
    }
  }
`;

export default StyledDiv;
