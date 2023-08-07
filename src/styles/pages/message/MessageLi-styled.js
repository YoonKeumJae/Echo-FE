import styled from 'styled-components';

const StyledMessageLi = styled.li`
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  padding: 22px;
  box-sizing: border-box;
  position: relative;

  .profilePic {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 80px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    background-color: lightgray;
    position: absolute;
    left: 27px;
  }
  .center {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 127px;
    justify-content: center;
  }
  .name {
    color: #000;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .message {
    color: #000;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .right {
    position: absolute;
    right: 28.5px;
  }
`;

export default StyledMessageLi;
