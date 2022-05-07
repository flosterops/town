import styled from 'styled-components';
import { Column, ILayout, Row } from 'ui';
import { StyledSignUp } from 'ui/SignUpButton/styles';
import { BurgerButton } from '../BurgerMenu/styles';
import { BreakPoints, media } from 'theme/responsive.theme';
import { StyledLogo } from 'ui/Logo/styles';

interface IStyledMobileMenu extends ILayout {
  open: boolean;
  image: string;
}

interface IMobileModalHeader extends ILayout {
  image: string;
}

export const StyledMobileMenu = styled(Column)<IStyledMobileMenu>`
  position: fixed !important;
  height: auto !important;
  left: 0;
  top: 0;
  z-index: 10;
  margin-top: ${(props: IStyledMobileMenu): string => (props.open ? '0' : '-100vh')};
  transition: 0.4s all ease;
  background-image: url('${(props: IStyledMobileMenu): string => props.image}');
`;

export const MobileModalHeader = styled(Row)<IMobileModalHeader>`
  background-image: url('${(props: IMobileModalHeader): string => props.image}');

  & ${StyledLogo} {
    width: auto;
  }
`;

export const MobileMenuFooter = styled(Row)<ILayout>`
  position: absolute;
  bottom: -60px;

  & ${BurgerButton} {
    position: absolute;
    right: 0;
    top: 10px;
    margin-right: 10px;
  }
`;

export const MobileSignUpWrapper = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    & ${StyledSignUp} {
      display: flex;
      width: 100%;
    }
  }
`;
