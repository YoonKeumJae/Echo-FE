import { styled } from 'styled-components';

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  background-color: rgba(244, 244, 244, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 999;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export { BackdropDiv, ModalDiv };
