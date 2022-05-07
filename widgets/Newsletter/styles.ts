import styled from 'styled-components';
import { Column, ILayout } from 'ui';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledNewsletter extends ILayout {
  image: string;
}

export const StyledNewsletter = styled(Column)<IStyledNewsletter>`
  background-image: url('${(props: IStyledNewsletter): string => props.image}');
  background-size: cover;
  background-position: center;
  max-height: 800px;
  height: 100%;
  ${media.lessThan(BreakPoints.tablet)} {
    max-height: 500px;
  }
`;

export const TreeImage = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 5vh;
  width: 25vw;
  max-width: 480px;
`;

export const PortraitImage = styled.img`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 3vh;
  width: 30vw;
  max-width: 576px;
`;

export const KittyImage = styled.img`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  width: 35vw;
  max-width: 672px;
`;
