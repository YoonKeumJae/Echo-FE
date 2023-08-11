import styled from 'styled-components';

const StyledOppositeSide = styled.div`
  display: inline-block;
  max-width: 80%;
  float: left;
  clear: both;
  border-radius: 0px 30px 30px 30px;
  background: #fff;
  box-shadow: 1px 4px 4px 0px rgba(36, 61, 197, 0.2);
  padding: 15px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const OppositeSide = () => {
  return <StyledOppositeSide>This is Opposite side</StyledOppositeSide>;
};

export default OppositeSide;
