import React, { ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/store_banner.png';
// @ts-ignore
import googlePlay from 'public/assets/images/google_play_deactive.png';
// @ts-ignore
import appStore from 'public/assets/images/app_store_deactivated.png';
import { Row } from 'ui';
import { BannerImage, ComingSoonDescription, StoreBannerWrapper, StoreButtonsWrapper } from './styles';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';

const StoreBanner = (): ReactElement => (
  <StoreBannerWrapper componentWidth='40%'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <BannerImage src={bg.src} alt='Store banner' />
    <StoreButtonsWrapper componentHeight='100%' ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceEvenly}>
      <ComingSoonDescription mtop='1.7vw' doHyeonFont fontSize={FontSizeTypes.m}>
        Coming soon on
      </ComingSoonDescription>
      <Row>
        <Row margin='0 8px 0 15px'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={googlePlay.src} alt='Google Pay' />
        </Row>
        <Row margin='0 15px 0 8px'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={appStore.src} alt='App store' />
        </Row>
      </Row>
    </StoreButtonsWrapper>
  </StoreBannerWrapper>
);

export { StoreBanner };
