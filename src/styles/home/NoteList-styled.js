import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

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

  .noteList {
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;

    background: #fff;
    box-shadow: 0px 4px 5px 0px rgba(180, 180, 180, 0.1);
  }
`;

export default StyledDiv;
