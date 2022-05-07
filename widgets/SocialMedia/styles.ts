import styled from 'styled-components';
import { ILayout, Row } from 'ui';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { colors } from 'theme/colors.theme';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledSocialMedia extends ILayout {
  image: string;
}

export const StyledSocialMedia = styled(Row)<IStyledSocialMedia>`
  background-image: url('${(props: IStyledSocialMedia): string => props.image}');
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  max-width: 259px;
  width: 50%;
  a:hover {
    opacity: 1;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
  z-index: 2;
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)<FontAwesomeIconProps>`
  cursor: pointer;
  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const MobileSocialMediaWrapper = styled(Row)`
  background-repeat: no-repeat;
  height: 60px;
  background-color: #65301b;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 4px solid ${colors.brown};
  border-top: 0;
`;
