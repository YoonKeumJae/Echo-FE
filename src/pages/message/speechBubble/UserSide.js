import styled from 'styled-components';

const StyledUserside = styled.div`
  display: inline-block;
  max-width: 80%;
  float: right;
  clear: both;
  border-radius: 30px 30px 0px 30px;
  background: #ececec;
  box-shadow: 1px 4px 4px 0px rgba(36, 61, 197, 0.2);
  padding: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Userside = () => {
  return <StyledUserside>This is user side</StyledUserside>;
};

export default Userside;
