import { Column, ILayout } from '../Layout';
import styled from 'styled-components';

interface IModalVideoWrapper extends ILayout {
  open: boolean;
}

export const ModalVideoWrapper = styled(Column)<IModalVideoWrapper>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #000;
  margin-top: ${(props: IModalVideoWrapper): string => (props.open ? '0' : '-100vh')};
  transition: 0.4s all ease;
`;

export const CloseVideoModal = styled.button`
  background: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 11;
`;
