import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 21;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 150px;
  min-height: 100px;
  max-width: 90vw;
  max-height: 90vh;
`;
