import React, { ReactElement } from 'react';
import { Column, Logo } from 'ui';
import { ELogoType } from 'models/logo.model';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
// @ts-ignore
import bg from 'public/assets/images/keyart_bg.jpeg';
// @ts-ignore
import appStore from 'public/assets/images/app_store_deactivated.png';
// @ts-ignore
import googlePlay from 'public/assets/images/google_play_deactive.png';
// @ts-ignore
import market from 'public/assets/images/table_block.png';
// @ts-ignore
import mobileBg from 'public/assets/images/mobile_header_bg.png';
// @ts-ignore
import tabletBg from 'public/assets/images/tablet_header_bg.png';
import { MobileComingSoon } from '../MobileComingSoon';
import { LogoWrapper, StyledHeader, StyledMarketWrapper } from './styles';

const Header = (): ReactElement => (
  <StyledHeader
    tabletImage={tabletBg.src}
    mobileImage={mobileBg.src}
    image={bg.src}
    jc={JustifyContentTypes.spaceBetween}
    ai={AlignItemsTypes.center}
    componentHeight='100%'
    padding='40px 0 0'
  >
    <LogoWrapper ai={AlignItemsTypes.center} componentWidth='70%' mtop='-60px' padding='0 40px'>
      <Logo type={ELogoType.big} />
    </LogoWrapper>
    <Column componentWidth='auto' ai={AlignItemsTypes.center} padding='0 40px'>
      <StyledMarketWrapper mtop='80px' componentWidth='90%' ai={AlignItemsTypes.center}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={market.src} alt='Table market' />
      </StyledMarketWrapper>
    </Column>
    <MobileComingSoon />
  </StyledHeader>
);

export { Header };
