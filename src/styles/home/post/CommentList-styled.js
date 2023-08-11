import { styled } from 'styled-components';

const StyledDiv = styled.div`
  .comment-list {
    margin-top: 16px;
    padding: 8px 0;

    border-top: 1px solid #d9d9d9;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .comment-form {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 0 32px;

    img {
      width: 32px;
    }

    input {
      flex: 1;
      border: none;
      background: transparent;
      padding-inline-start: 8px;

      &:focus {
        outline: none;
      }
    }

    button {
      position: absolute;
      bottom: 0;
      right: 0;

      background: #243dc5;
      color: white;

      border-radius: 15px;

      width: 96px;
      height: 24px;
    }
  }
`;

export default StyledDiv;
