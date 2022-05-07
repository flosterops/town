import styled from 'styled-components';
import { Column, Description, IDescription, ILayout, Row } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

export const StoreBannerWrapper = styled(Row)<ILayout>`
  position: absolute;
  right: 10%;
  top: 100%;
  z-index: 5;
  max-width: 450px;
  max-height: 210px;
  height: 10vw;
  ${media.lessThan(BreakPoints.tablet)} {
    width: 60%;
  }
  ${media.lessThan(BreakPoints.phone)} {
    display: none;
  }
`;

export const BannerImage = styled.img`
  position: absolute;
  z-index: 6;
`;

export const StoreButtonsWrapper = styled(Column)<ILayout>`
  z-index: 8;

  ${media.lessThan(BreakPoints.tablet)} {
    margin-top: 2.5vw;
  }
`;

export const ComingSoonDescription = styled(Description)<IDescription>`
  font-size: 1.4vw;

  ${media.moreThan(BreakPoints.wideDesktop)} {
    font-size: 27px;
    margin-top: 30px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    font-size: 1.9vw;
    margin: 10px;
  }
`;
