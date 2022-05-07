// @ts-ignore
import img1 from 'public/assets/features/img/feature_slider_01_build.png';
import { ImageWrapper } from './styles';
import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export function SliderItem ({ src, alt }: Props) {
  return (
    <ImageWrapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
}
