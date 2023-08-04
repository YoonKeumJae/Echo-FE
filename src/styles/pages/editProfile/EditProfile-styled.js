import styled from 'styled-components';

const StyledEditProfile = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header {
    width: 100%;
    height: 102px;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .header__back {
    cursor: pointer;
    position: absolute;
    top: 26px;
    left: 26px;
  }
  .header__title {
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    top: 30px;
    left: 103px;
  }
  .profile {
    width: 100%;
    height: 400px;
    background-color: #ffffff;
    position: relative;
  }
  .profile__background {
    width: 100%;
    height: 300px;
    background-color: rgba(6, 6, 6, 0.4);
    margin-bottom: -130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile__background__svg {
    mouse-over: pointer;
  }
  .profile__image {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 76px;
    border-radius: 200px;
    background-color: #060606;
    z-index: 1;
    border: 5px solid #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile__image__svg {
    mouse-over: pointer;
  }
  .inputFormBox {
    backgorund-color: tomato;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .insertNameTitle {
    align-self: flex-start;
    color: #000;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .insertBioTitle {
    align-self: flex-start;
    color: #000;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .insertName {
    width: 100%;
    height: 70px;
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid #6b6b6b;
    background: rgba(255, 255, 255, 0.92);
    margin-bottom: 28px;
  }
  .insertBio {
    width: 100%;
    height: 140px;
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid #6b6b6b;
    background: rgba(255, 255, 255, 0.92);
    margin-bottom: 71px;
    line-height: 1;
  }
  .submitBtn {
    border-radius: 25px;
    border: 2px solid #141414;
    background: #fff;
    width: 200px;
    height: 60px;
    color: #000;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default StyledEditProfile;
