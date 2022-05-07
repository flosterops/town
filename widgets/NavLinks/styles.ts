import styled from 'styled-components';
import { scaleAnimation } from 'theme/animation.theme';
import { colors } from 'theme/colors.theme';
import { ai, fontSize, jc, weight } from 'theme/functions.theme';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes, WeightTypes } from 'models/layout.model';
import { doHyeonFontFamily } from 'theme/fonts.theme';
import { BreakPoints, media } from 'theme/responsive.theme';
import { Column, ILayout, Row } from 'ui';

export const StyledLink = styled.a`
  display: flex;
  height: 100%;
  margin-left: 30px;
  ${doHyeonFontFamily()}
  ${scaleAnimation(1.1)}
  ${jc({ jc: JustifyContentTypes.center })}
  ${ai({ ai: AlignItemsTypes.center })}
  ${fontSize({ fontSize: FontSizeTypes.l })}
  &:hover {
    color: ${colors.textPrimary};
    opacity: 1;
  }

  ${media.lessThan(BreakPoints.desktop)} {
    margin-left: 15px;
  }

  ${media.lessThan(BreakPoints.smallDesktop)} {
    ${fontSize({ fontSize: FontSizeTypes.m })}
  }
`;

export const NavLinksWrapper = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const MobileNavLinksWrapper = styled(Column)<ILayout>`
  z-index: 3;
`;

export const MobileNavLink = styled.a`
  ${fontSize({ fontSize: FontSizeTypes.l })};
  ${weight({ weight: WeightTypes.w600 })}
  ${doHyeonFontFamily()}
  margin-bottom: 15px;
`;
