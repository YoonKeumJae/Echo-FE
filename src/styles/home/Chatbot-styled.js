import { styled } from 'styled-components';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;

  background: transparent;
  z-index: 999;

  .chatbot {
    color: red;

    button {
      background: none;
      border: none;
      cursor: pointer;

      img {
        width: 64px;
      }
    }
  }
`;

export default ChatbotContainer;
