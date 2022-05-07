import React, { ReactElement } from 'react';
import { Description, Row } from 'ui';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
// @ts-ignore
import bg from 'public/assets/images/mobile_coming_soon_banner.png';
// @ts-ignore
import googlePlay from 'public/assets/images/google_play_deactive.png';
// @ts-ignore
import appStore from 'public/assets/images/app_store_deactivated.png';
import { MobileComingSoonWrapper } from './styles';

const MobileComingSoon = (): ReactElement => (
  <MobileComingSoonWrapper
    componentHeight='70px'
    image={bg.src}
    ai={AlignItemsTypes.center}
    jc={JustifyContentTypes.spaceBetween}
    padding='0 10px'
  >
    <Row componentWidth='40%' ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
      <Description fontSize={FontSizeTypes.m} doHyeonFont>
        Coming soon on
      </Description>
    </Row>
    <Row componentWidth='60%' ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
      <Row mright='8px'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={googlePlay.src} alt='Google Pay' />
      </Row>
      <Row mleft='8px'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={appStore.src} alt='App store' />
      </Row>
    </Row>
  </MobileComingSoonWrapper>
);

export { MobileComingSoon };
