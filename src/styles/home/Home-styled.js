import { styled } from 'styled-components';

const StyledHome = styled.div`
  display: flex;

  section {
    width: 624px;

    padding: 8px;
    background: #fcfcfc;
    box-shadow: 0px 4px 5px 0px #b4b4b41a;

    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;

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

      .post {
        padding: 8px;
        background: #fcfcfc;
        border: 1px solid #dbdbdb;
        box-shadow: 0px 4px 5px 0px #b4b4b41a;

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
      }
    }
  }
`;

export default StyledHome;
