import styled from 'styled-components';
import { ILayout, Row } from 'ui';
import { StyledSignUp } from 'ui/SignUpButton/styles';
import { BreakPoints, media } from 'theme/responsive.theme';
import { StyledLogo } from 'ui/Logo/styles';

interface IStyledNavBar extends ILayout {
  image: string;
}

export const StyledNavBar = styled(Row)<IStyledNavBar>`
  background-image: url(${(props: IStyledNavBar): string => props.image});
  z-index: 2;

  & ${StyledSignUp} {
    max-width: 230px;
    width: 40%;
    background-position: center;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    & ${StyledSignUp} {
      display: none;
    }
  }
`;

export const LogoWrapper = styled(Row)<ILayout>`
  margin-left: 80px;

  & ${StyledLogo} {
    width: auto;
    height: 70%;
  }

  ${media.lessThan(BreakPoints.desktop)} {
    margin-left: 20px;
  }
`;
