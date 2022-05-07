import styled from 'styled-components';

export interface ICloseButton {
  size?: number
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export const CloseButtonElement = styled.button<ICloseButton>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  top: ${(props) => props.top || "10px"};
  right: ${(props) => props.right || "10px"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 0;
    height: 80%;
    width: 2px;
    background: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
