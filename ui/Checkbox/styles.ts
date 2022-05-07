import styled from 'styled-components';
import { fontSize } from 'theme/functions.theme';
import { FontSizeTypes } from 'models/layout.model';
import { ILayout, Row } from '../Layout';

export const CheckboxLabel = styled.label`
  ${fontSize({ fontSize: FontSizeTypes.s })};
  line-height: 1;
  margin-top: 3px;
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: normal;
`;

export const CheckboxWrapper = styled(Row)<ILayout>`

`

export const StyledCheckbox = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  border: 0;
  outline: none;
  background: transparent;
  width: 38px;
  height: 38px;
  opacity: 0;
  margin: 0;

  &:checked ~ span {
    background: #5f2d0e;
    border-radius: 5px;
  }
`;

export const CheckboxView = styled.span`
  cursor: pointer;
  position: absolute;
  left: 6px;
  top: 6px;
  width: 25px;
  height: 25px;
`;
