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

      .wrtie-container {
        display: flex;
        align-items: center;
        flex: 1;
        height: 100%;

        button {
          text-align: left;
          flex: 1;
          height: 100%;
          color: #a9a9a9;
          background-color: #f0f2f5;
          font-size: 16px;
          padding-left: 15px;
          border-radius: 15px;

          &:hover {
            background-color: #cccccc;
          }
        }
      }
    }
  }
`;

export default StyledHome;
