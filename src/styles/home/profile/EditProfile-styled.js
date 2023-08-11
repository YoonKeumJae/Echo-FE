import styled from 'styled-components';

const StyledDiv = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: end;
    gap: 8px;
    margin-bottom: 8px;

    .header__back {
      cursor: pointer;
    }
    .header__title {
      color: #000;
      font-family: Inter;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 64px;

    .profile {
      width: 100%;
      position: relative;

      .profile__background {
        height: 256px;
        background: #f3f3f3;

        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }

      .profile__image {
        width: 120px;
        height: 120px;

        position: absolute;
        top: 176px;
        left: 76px;
        border-radius: 50%;

        background-color: #f3f3f3;
        z-index: 1;
        border: 5px solid #ffffff;

        overflow: hidden;

        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }

    .inputFormBox {
      margin-top: 32px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      width: 432px;

      .input-container {
        width: 100%;

        label {
          font-family: Inter;
          font-size: 24px;
          font-weight: 600;
        }

        input {
          margin-top: 8px;
          width: 100%;
          height: 36px;
          font-family: Inter;
          font-size: 18px;
          font-weight: 500;

          padding-inline-start: 8px;

          border-radius: 5px;
          border: 1px solid #6b6b6b;

          background: rgba(255, 255, 255, 0.92);
        }

        textarea {
          margin-top: 8px;
          width: 100%;
          height: 36px;
          font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          resize: none;

          padding: 8px 0 0 8px;
          background: rgba(255, 255, 255, 0.92);
          height: 72px;
        }
      }

      .submitBtn {
        margin-top: 32px;
        border-radius: 25px;
        border: 2px solid #141414;

        width: 144px;
        height: 48px;

        font-family: Inter;
        font-size: 20px;
        font-weight: 600;

        &:hover {
          background-color: #141414;
        }
      }
    }
  }
`;

export default StyledDiv;
