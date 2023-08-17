import { styled } from 'styled-components';

const StyledAsideFriend = styled.aside`
  position: sticky;
  top: 0;

  width: 216px;
  height: fit-content;
  padding: 8px 16px 0;

  .search-query {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 8px;

    background: #f1f3f6;
    border-radius: 15px;
    height: 36px;

    img {
      position: absolute;
      width: 24px;
    }

    input {
      border: none;
      background: transparent;
      padding-inline-start: 28px;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  .recommend {
    display: flex;
    flex-direction: column;
    gap: 8px;

    background: #f1f3f6;
    margin-top: 16px;
    padding: 4px 12px 16px;

    border-radius: 15px;

    .title {
      font-size: 18px;
      margin: 8px 0;
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .friend {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 32px;
        }
      }
    }
  }

  .more {
    text-align: center;
    margin: 8px 0 0;

    .more-friend-button {
      color: #243dc5;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledAsideFriend;
