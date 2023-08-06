import { styled } from 'styled-components';

const StyledHome = styled.div`
  .title {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .write {
    padding: 4px 8px;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 4px 4px 0px #dcdcdc40;

    .input-container {
      display: flex;
      align-items: center;
      height: 48px;
      gap: 8px;

      img {
        width: 32px;
      }

      button {
        color: #a9a9a9;
        font-size: 16px;
      }
    }
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px 0;
  }
`;

export default StyledHome;
