import styled from 'styled-components';
import { ILayout, Row } from '../Layout';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IVideoWrapper extends ILayout {
  isModal: boolean;
}

export const VideoWrapper = styled(Row)<IVideoWrapper>`
  position: absolute;
  top: ${(props: IVideoWrapper): string => (props.isModal ? '0' : '-10vw')};
  left: 0;
  z-index: 0;
  ${media.moreThan(BreakPoints.wideDesktop)} {
    top: -192px;
  }
`;

export const StyledVideo = styled.video`
  display: flex;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
`;
