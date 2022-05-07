import styled from 'styled-components';
import { Column, ILayout, Row } from 'ui';
import { colors } from 'theme/colors.theme';
import { fontSize, weight } from 'theme/functions.theme';
import { FontSizeTypes, WeightTypes } from 'models/layout.model';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledFooter extends ILayout {
  image: string;
}

export const StyledFooter = styled(Column)<IStyledFooter>`
  min-height: 290px;
  background-image: url('${(props: IStyledFooter): string => props.image}');
  background-position: bottom;

  ${media.lessThan(BreakPoints.tablet)} {
    padding: 30px 0 20px;
  }
`;

export const PrivacyLink = styled.a`
  text-transform: uppercase;
  ${weight({ weight: WeightTypes.w600 })}
  border-right: 2px solid ${colors.textPrimary};
  padding: 0 10px;
  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    ${fontSize({ fontSize: FontSizeTypes.xs })}
  }
`;

export const LicenseTextWrapper = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.tablet)} {
    width: 100%;
    padding: 0 10px;
  }
`;

export const FooterImage = styled.img`
  width: 100%;
  height: auto;
`;
