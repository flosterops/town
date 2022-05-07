import styled from 'styled-components';
import { ILayout, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IMobileComingSoonWrapper extends ILayout {
  image: string;
}

export const MobileComingSoonWrapper = styled(Row)<IMobileComingSoonWrapper>`
  display: none;
  background-image: url('${(props: IMobileComingSoonWrapper): string => props.image}');
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 10;
  ${media.lessThan(BreakPoints.phone)} {
    display: flex;
  }
`;
