import { styled } from 'styled-components';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;

  background: transparent;

  .chatbot {
    max-width: 368px;
    .chatbot-img {
      position: absolute;
      right: 0;
      bottom: 0;

      background: none;
      border: none;
      cursor: pointer;

      img {
        width: 64px;
      }
    }

    .speech-bubble {
      z-index: 10001;
      position: relative;
      right: -16px;
      bottom: 82px;

      padding: 4px 8px;
      border: 1px solid #000000;
      border-radius: 0.4em;

      text-align: right;

      p {
        text-align: left;
        margin: 0;
      }

      .button-container {
        display: flex;
        justify-content: end;
        margin-top: 8px;
        gap: 8px;

        button {
          cursor: pointer;
        }
      }
    }

    .speech-bubble:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 42px;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      border-top-color: #000000;
      border-bottom: 0;
      margin-left: -12px;
      margin-bottom: -12px;
    }
  }
`;

export default ChatbotContainer;
