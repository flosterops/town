import { css, FlattenSimpleInterpolation } from 'styled-components';

export const scaleAnimation = (scale: number): FlattenSimpleInterpolation => css`
  transition: 0.3s all ease;
  &:hover {
    transform: scale(${scale});
  }
  &:not(hover) {
    transform: scale(1);
  }
`;
