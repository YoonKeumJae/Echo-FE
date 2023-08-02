import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0 auto;
  width: 1280px;
  font-size: 14px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;

    border: none;
    background: none;

    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  textarea {
    padding: 0;
  }
`;

export default StyledApp;
