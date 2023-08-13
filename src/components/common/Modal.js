import ReactDOM from 'react-dom';

import { BackdropDiv, ModalDiv } from '@styles/common/Modal-styled';

const Backdrop = ({ onClose }) => <BackdropDiv onClick={onClose} />;

const ModalOverlay = ({ className, children }) => (
  <ModalDiv className={`modal ${className}`}>{children}</ModalDiv>
);

const portalElement = document.getElementById('modal');

const Modal = ({ onClose, children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalElement,
    )}
  </>
);

export default Modal;
