import React from 'react';
// @ts-ignore
import char1 from 'public/assets/features/char/features_slider_01_char_ol.png';
// @ts-ignore
import char2 from 'public/assets/features/char/features_slider_02_char_ol.png';
// @ts-ignore
import char3 from 'public/assets/features/char/features_slider_03_char_ol.png';
// @ts-ignore
import char4 from 'public/assets/features/char/features_slider_04_char_ol.png';
// @ts-ignore
import char5 from 'public/assets/features/char/features_slider_05_char_ol.png';
import { CharWrapper } from './styles';

export function Char (props: { slide: number }) {
  return (
    <CharWrapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {props.slide === 0 && <img className='char1' src={char1.src} alt='char' />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {props.slide === 1 && <img className='char2' src={char2.src} alt='char' />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {props.slide === 2 && <img className='char3' src={char3.src} alt='char' />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {props.slide === 3 && <img className='char4' src={char4.src} alt='char' />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {props.slide === 4 && <img className='char5' src={char5.src} alt='char' />}
    </CharWrapper>
  );
}
