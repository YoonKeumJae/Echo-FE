import { styled } from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 16px;
  padding: 4px 16px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 4px 4px 0px #dcdcdc40;

  .user-list {
    display: flex;
    flex-direction: column;

    padding: 8px 0;

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 12px 0;

      .user-profile {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 32px;
        }

        .user-info {
          display: flex;
          flex-direction: column;

          margin-left: 4px;

          .nickname {
            font-weight: 700;
          }
        }
      }

      .add-button {
        background: #000000;
        color: #ffffff;

        width: 64px;
        height: 24px;
        border-radius: 12px;
      }
    }
  }

  .more-container {
    padding: 16px 0;
    display: flex;
    justify-content: center;

    & a {
      color: #243dc5;
    }
  }
`;

export default StyledDiv;
