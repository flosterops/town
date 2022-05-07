import React from 'react';
import { CloseButtonElement } from './styles';

export interface ICloseButton {
  size?: number
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface CloseButtonProps extends ICloseButton {
  onClose?: (...args: any) => void
}

const CloseButton = ({ onClose, ...elementProps }: CloseButtonProps) => {
  return <CloseButtonElement onClick={onClose} {...elementProps} />
};

export { CloseButton };
