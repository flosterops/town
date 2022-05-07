import styled from 'styled-components';
import { Column, Description, ILayout } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';
import { fontSize } from 'theme/functions.theme';
import { FontSizeTypes } from 'models/layout.model';

interface IVideoPlaceholder extends ILayout {
  image: string;
}

export const StyledCinematicTrailer = styled(Column)<ILayout>`
  position: relative;
  ${media.lessThan(BreakPoints.wideDesktop)} {
    min-height: 55.556vw;
  }
  ${media.lessThan(BreakPoints.desktop)} {
    min-height: 55.556vw;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    min-height: 55.249vw;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    min-height: 55.118vw;
  }
  ${media.lessThan(BreakPoints.phone)} {
    max-height: 250px;
    min-height: 150px;
  }
`;

export const TopBanner = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const BottomBanner = styled.img`
  width: 100%;
  position: absolute;
  bottom: -90px;
  left: 0;
  z-index: 3;
`;

export const VideoPlaceholder = styled(Column)<IVideoPlaceholder>`
  background: transparent;
  position: absolute;
`;

export const CinematicDescription = styled(Description)<ILayout>`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  ${media.lessThan(BreakPoints.tablet)} {
    margin-top: 10px;
    ${fontSize({ fontSize: FontSizeTypes.m })}
  }
`;

export const PlayVideo = styled.img`
  width: auto;
  cursor: pointer;
  ${media.lessThan(BreakPoints.tablet)} {
    margin-top: 40px;
    width: 20%;
  }
`;
