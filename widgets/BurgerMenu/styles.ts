import styled from 'styled-components';
import { ILayout, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

export const BurgerButton = styled.button`
  background: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
`;

export const StyledBurgerMenu = styled(Row)<ILayout>`
  display: none;

  ${media.lessThan(BreakPoints.tablet)} {
    display: flex;
  }

  & ${BurgerButton} {
    margin-right: 20px;
  }
`;
