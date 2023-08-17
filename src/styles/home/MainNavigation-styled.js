import { styled } from 'styled-components';

const StyledMainNavigation = styled.nav`
  position: sticky;
  top: 0;

  width: 320px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 16px;

  .item {
    display: flex;
    align-items: center;
    padding: 0 8px;

    height: 48px;
    width: 160px;

    &:first-child {
      margin-bottom: 16px;
    }

    img {
      vertical-align: bottom;
    }

    span {
      margin-left: 8px;
      font-size: 20px;
    }

    .active {
      font-weight: 700;
    }
  }
`;

export default StyledMainNavigation;
