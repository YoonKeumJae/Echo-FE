import ReactDOM from 'react-dom';

import { BackdropDiv, ModalDiv } from '@styles/common/Modal-styled';
import ChatbotContainer from '@styles/home/Chatbot-styled';

const Backdrop = ({ onClose }) => <BackdropDiv onClick={onClose} />;

const ModalOverlay = ({ className, children }) => (
  <ModalDiv className={`modal ${className}`}>{children}</ModalDiv>
);

const portalElement = document.getElementById('modal');

const Modal = ({ isChatbot, onClose, children }) => {
  const view = isChatbot ? (
    <ChatbotContainer>{children}</ChatbotContainer>
  ) : (
    <ModalOverlay>{children}</ModalOverlay>
  );
  return (
    <>
      {!isChatbot &&
        ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(view, portalElement)}
    </>
  );
};

export default Modal;
