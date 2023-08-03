import styled from 'styled-components';

const StyledProfile = styled.div`
  .wrapper {
    width: 100%;
    height: 100%;
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
    height: 512px;
    background-color: #ffffff;
    position: relative;
  }
  .profile__background {
    width: 100%;
    height: 300px;
    background: #f3f3f3;
    margin-bottom: -130px;
  }
  .profile__image {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 76px;
    border-radius: 200px;
    background-color: #f3f3f3;
    z-index: 1;
    border: 5px solid #ffffff;
  }
  .profile__edit {
    width: 200px;
    height: 60px;
    position: absolute;
    right: 41px;
    top: 323px;
    border-radius: 25px;
    border: 2px solid #141414;
    background: #fff;
    color: #000;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .profile__name {
    color: #000;
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    top: 392px;
    left: 76px;
  }
  .profile__bio {
    color: #6b6b6b;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 447px;
    left: 76px;
  }
`;

export default StyledProfile;
