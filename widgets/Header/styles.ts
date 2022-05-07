import styled from 'styled-components';
import { Column, ILayout, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledHeader extends ILayout {
  image: string;
  tabletImage: string;
  mobileImage: string;
}

export const StyledHeader = styled(Column)<IStyledHeader>`
  background-image: url('${(props: IStyledHeader): string => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 900px;
  z-index: 1;

  ${media.lessThan(BreakPoints.desktop)} {
    min-height: 850px;
  }

  ${media.lessThan(BreakPoints.smallDesktop)} {
    overflow: hidden;
    min-height: 750px;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    min-height: 600px;
    padding: 20px 0 0 0;
    background-image: url('${(props: IStyledHeader): string => props.tabletImage}');
  }

  ${media.lessThan(BreakPoints.phone)} {
    background-image: url('${(props: IStyledHeader): string => props.mobileImage}');
  }
`;

export const LogoWrapper = styled(Row)<ILayout>`
  ${media.lessThan(BreakPoints.lgDesktop)} {
    margin: 0;
    transform: scale(1.4);
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    margin: 60px 0 0 0;
    transform: scale(2);
  }
  ${media.lessThan(BreakPoints.tablet)} {
    margin: 60px 0 0 0;
    transform: scale(2.4);
  }
  ${media.lessThan(BreakPoints.phone)} {
    transform: scale(5);
  }
`;

export const StyledMarketWrapper = styled(Row)<ILayout>`
  img {
    width: 100%;
  }

  ${media.lessThan(BreakPoints.tablet)} {
    width: 80%;
  }

  ${media.lessThan(BreakPoints.phone)} {
    width: 100%;
    margin-bottom: -180px;
  }
`;
