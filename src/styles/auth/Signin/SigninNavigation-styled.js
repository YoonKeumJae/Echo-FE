import { styled } from 'styled-components';

const StyledDiv = styled.div`
  .navigation {
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
  }

  .link-text {
    font-size: 12px;
    margin-left: 8px;
    text-align: right;
    color: #243dc5;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .account {
    color: #6b6b6b;
  }

  .divider {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #000000;
    font-size: 12px;
    margin: 24px 0px;

    &::before,
    &::after {
      content: '';
      flex-grow: 1;
      background: #b9b9b9;
      height: 1px;
      font-size: 0px;
      line-height: 0px;
    }

    p {
      margin: 0 8px;
    }
  }
`;

export default StyledDiv;
