import { styled } from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid #ccc;

  .search-form {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 8px;

    background: #f1f3f6;
    border-radius: 15px;
    height: 36px;

    img {
      position: absolute;
      width: 24px;
    }

    input {
      flex: 1;
      border: none;
      background: transparent;
      padding-inline-start: 28px;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  .search-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;

    a {
      flex: 1;
      text-align: center;
      font-size: 18px;
    }

    .selected {
      font-weight: 600;
      color: #243dc5;
    }
  }
`;

export default StyledDiv;
