import styled from 'styled-components';
import { Column, ILayout } from 'ui';
// @ts-ignore
import prevBtn from 'public/assets/features/cursor_left.png';
// @ts-ignore
import nextBtn from 'public/assets/features/cursor_right.png';
// @ts-ignore
import img from 'public/assets/features/img/feature_slider_01_build.png';
import { BreakPoints, media } from 'theme/responsive.theme';

interface IStyledFeatures extends ILayout {
  image: string;
}

export const StyledFeatures = styled(Column)<IStyledFeatures>`
  background-image: url('${(props: IStyledFeatures): string => props.image}');
`;

export const FeatureSliderWrapper = styled.div<IStyledFeatures>`
  width: 855px;
  height: 427px;
  padding: 28px 26px;
  background-image: url('${(props: IStyledFeatures): string => props.image}');
  background-size: 100%;
  z-index: 3;
  ${media.lessThan(BreakPoints.smallDesktop)} {
    width: 428px;
    height: 214px;
    padding: 14px 13px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    background-image: none;
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const Mask = styled.div`
  mask: url(${img.src});
  mask-size: 100%;
  ${media.lessThan(BreakPoints.tablet)} {
    mask: none;
  }
`;

export const PrevButton = styled.div`
  width: 70px;
  height: 122px;
  background-image: url('${prevBtn.src}');
  background-size: 100%;
  cursor: pointer;
  margin-right: 60px;
  &:before {
    content: none;
  }
  &:hover {
    background-image: url('${prevBtn.src}');
    filter: contrast(120%);
  }
  z-index: 1;
  ${media.lessThan(BreakPoints.smallDesktop)} {
    width: 35px;
    height: 61px;
    margin-right: 30px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    margin-right: -50px;
    z-index: 5;
  }
`;

export const NextButton = styled.div`
  width: 70px;
  height: 122px;
  background-image: url('${nextBtn.src}');
  background-size: 100%;
  cursor: pointer;
  margin-left: 60px;
  &:before {
    content: none;
  }
  &:hover {
    background-image: url('${nextBtn.src}');
    filter: contrast(120%);
  }
  z-index: 5;
  ${media.lessThan(BreakPoints.smallDesktop)} {
    width: 35px;
    height: 61px;
    margin-left: 30px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    margin-left: -50px;
  }
`;

export const TreesWrapper = styled.div`
  width: 155px;
  height: 237px;
  position: absolute;
  margin-left: -860px;
  margin-top: 290px;
  z-index: 2;
  .tree1 {
    margin-top: 70px;
    margin-left: -40px;
  }
  .tree2 {
    margin-top: 70px;
    margin-left: -40px;
  }
  .tree3 {
    margin-top: 30px;
    margin-left: -20px;
  }
  .tree5 {
    margin-top: 30px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    margin-right: -501px;
    margin-top: 262px;
    .tree1 {
      margin-top: 58px;
      margin-left: 0;
    }
    .tree2 {
      margin-top: 44px;
      margin-left: 0;
    }
    .tree3 {
      margin-top: 25px;
      margin-left: 0;
    }
    .tree5 {
      margin-top: 25px;
    }
    img {
      width: 50%;
    }
  }
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const CharWrapper = styled.div`
  width: 197px;
  height: 301px;
  position: absolute;
  margin-right: -700px;
  margin-top: 250px;
  z-index: 4;
  .char1 {
    margin-top: 90px; 
    margin-left: 0;
  }
  .char3 {
    margin-top: 0;
  }
  .char5 {
    margin-left: -20px;
    margin-top: 80px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    margin-right: -478px;
    margin-top: 278px;
    .char1 {
      margin-left: -10px;
      margin-top: 40px;
    }
    .char3 {
      margin-top: 0;
    }
    .char5 {
      margin-left: 10px;
      margin-top: 45px;
    }
    img {
      width: 50%;
    }
  }
  ${media.lessThan(BreakPoints.tablet)} {
    display: none;
  }
`;

export const Heading = styled.h1`
  color: #2e1a09;
  padding-bottom: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  padding-top: 50px;
  width: 800px;
  p {
    min-height: 60px;
  }
  ${media.lessThan(BreakPoints.smallDesktop)} {
    width: 600px;
  }
  ${media.lessThan(BreakPoints.tablet)} {
    width: 100%;
    padding-bottom: 40px;
    padding-top: 20px;
    p {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  ${media.lessThan(BreakPoints.tablet)} {
    width: 100%;
    overflow: hidden;
    img {
      min-width: 120% !important;
      max-width: 120% !important;
      min-height: 120% !important;
      max-height: 120% !important;
      margin-left: -10% !important;
    }
  }
`;

export const Divider = styled.img`
  width: 100%;
  max-width: 644px;
`;
