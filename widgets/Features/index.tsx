import React, { ReactElement, useRef, useState } from 'react';
// @ts-ignore
import bg from 'public/assets/images/features_bg.jpeg';
// @ts-ignore
import feature from 'public/assets/images/features_headline.png';
// @ts-ignore
import divider from 'public/assets/images/divider.png';
import {
  Divider,
  FeatureSliderWrapper,
  Heading,
  Mask,
  NextButton,
  PrevButton,
  StyledFeatures,
  TextWrapper,
} from './styles';
import { AlignItemsTypes, AlignTextTypes, JustifyContentTypes } from 'models/layout.model';
import { Description, Row } from 'ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// @ts-ignore
import img1 from 'public/assets/features/img/feature_slider_01_build.png';
// @ts-ignore
import img2 from 'public/assets/features/img/feature_slider_02_trade.png';
// @ts-ignore
import img3 from 'public/assets/features/img/feature_slider_03_explore.png';
// @ts-ignore
import img4 from 'public/assets/features/img/feature_slider_04_protect.png';
// @ts-ignore
import img5 from 'public/assets/features/img/feature_slider_05_together.png';
// @ts-ignore
import phoneBg from 'public/assets/features/features_slider_bg.png';
import { texts } from './texts';
import { Trees } from './Trees';
import { Char } from './Char';
import { SliderItem } from './SliderItem';

function Features (): ReactElement {
  const [slide, setSlide] = useState(0);
  const slider = useRef(null);
  const settings = {
    dots:           false,
    arrows:         false,
    infinite:       true,
    speed:          500,
    slidesToShow:   1,
    slidesToScroll: 1,
    width:          805,
    height:         372,
    afterChange:    (currentSlide: number) => setSlide(currentSlide),
  };

  return (
    <StyledFeatures image={bg.src} ai={AlignItemsTypes.center}>
      <Row componentWidth='auto'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={feature.src} alt='Features'/>
      </Row>
      <Row componentWidth='100%' jc={JustifyContentTypes.center}>
        <Divider src={divider.src} alt='Divider' />
      </Row>
      <Row jc={JustifyContentTypes.center} ai={AlignItemsTypes.center} padding={"40px 0 0"}>
        <PrevButton onClick={() => (slider.current as any)?.slickPrev()}/>
        <Trees slide={slide}/>
        <FeatureSliderWrapper image={phoneBg.src}>
          <Mask>
            <Slider {...settings} ref={slider}>
                <SliderItem src={img1.src} alt='build'/>
                <SliderItem src={img2.src} alt='trade'/>
                <SliderItem src={img3.src} alt='explore'/>
                <SliderItem src={img4.src} alt='protect'/>
                <SliderItem src={img5.src} alt='together'/>
            </Slider>
          </Mask>
        </FeatureSliderWrapper>
        <Char slide={slide}/>
        <NextButton onClick={() => (slider.current as any)?.slickNext()}/>
      </Row>
      <TextWrapper>
        <Heading>{texts[slide].head}</Heading>
        <Description textAlign={AlignTextTypes.center} color='#2E1A09'>{texts[slide].text}</Description>
      </TextWrapper>
    </StyledFeatures>
  );
}

export { Features };
