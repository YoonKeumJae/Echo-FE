import styled from 'styled-components';

const StyledMessage = styled.div`
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  .messageList {
    width: 50%;
    height: 100%;
    border-right: 1px solid #d8d8d8;
    border-left: 1px solid #d8d8d8;
    background: #fff;
    box-shadow: 0px 4px 5px 0px rgba(180, 180, 180, 0.1);
  }
  .header {
    width: 100%;
    height: 102px;
    display: flex;
    position: relative;
    border-bottom: 1px solid #d9d9d9;
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
  MessageDetail{
    width: 50%;
  }
`;

export default StyledMessage;
