import { ModalContent, ModalWrapper } from './styles';
import { createPortal } from 'react-dom';
import React, { PropsWithChildren } from 'react';
import { CloseButton } from '../CloseButton';

interface ModalProps extends PropsWithChildren<{}> {
  onClose?: (...args: any) => void
  opened?: boolean
  hideCloseButton?: boolean
}

const Modal = ({ onClose, opened, children, hideCloseButton = false }: ModalProps) => {
  if (!opened) {
    return null
  }
  return createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        {!hideCloseButton && <CloseButton onClose={onClose} />}
      </ModalContent>
    </ModalWrapper>,
    document.getElementsByTagName("body")[0]
  )
};

export default Modal
