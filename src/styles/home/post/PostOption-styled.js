import styled from 'styled-components';

const OptionBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  gap: 8px;

  button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`;

export default OptionBox;
