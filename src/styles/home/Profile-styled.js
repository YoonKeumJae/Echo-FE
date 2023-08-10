import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  margin-bottom: 48px;

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

  .profile {
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

    .profile__edit {
      margin: 16px 32px 0 0;
      text-align: right;

      .edit_button {
        width: 150px;
        height: 42px;

        border-radius: 25px;
        border: 2px solid #141414;

        background: #fff;

        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    .profile__user {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 16px 0 0 64px;

      .profile__name {
        color: #000;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .profile__bio {
        color: #6b6b6b;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`;

export default StyledDiv;
