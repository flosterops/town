import styled from 'styled-components';
import { fontSize } from 'theme/functions.theme';
import { FontSizeTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
import { ILayout, Row } from '../Layout';

export const InputWrapper = styled(Row)<ILayout>`
  width: 100%;
  max-width: 500px;
`;

export const InputMask = styled.img`
  width: 100%;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  ${fontSize({ fontSize: FontSizeTypes.l })}
  color: ${colors.black};
  border: 0;
  height: 65px;
  padding: 5px 15px;
  outline: none;
  background: transparent;
  &::placeholder {
    color: ${colors.black};
  }
`;
