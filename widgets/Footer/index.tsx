import React, { ReactElement } from 'react';
import { Description, Row } from 'ui';
import { IConfig } from 'models/config.model';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
// @todo get rid of ts-ignore
// @ts-ignore
import bg from 'public/assets/images/footer_bg.png';
// @ts-ignore
import gamigoLogo from 'public/assets/images/footer_logo_gamigo.png';
// @ts-ignore
import arumgamesLogo from 'public/assets/images/arumgames_logo.png';
import { FooterImage, LicenseTextWrapper, PrivacyLink, StyledFooter } from './styles';
import config from './config.json';

interface IPrivacyConfig extends IConfig {
  name: string;
  link: string;
}

const Footer = (): ReactElement => (
  <StyledFooter jc={JustifyContentTypes.spaceBetween} image={bg.src} ai={AlignItemsTypes.center} padding='60px 0 40px'>
    <Row componentWidth='auto'>
      {(config as IPrivacyConfig[]).map(
        (link: IPrivacyConfig): ReactElement => (
          <PrivacyLink key={link.id} href={link.link}>
            {link.name}
          </PrivacyLink>
        )
      )}
    </Row>
    <Row jc={JustifyContentTypes.center} ai={AlignItemsTypes.center} componentWidth='auto'>
      <Row ai={AlignItemsTypes.center} mright='10px' componentHeight='100%'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <FooterImage src={gamigoLogo.src} alt='Gamigo logo' />
      </Row>
      <Row ai={AlignItemsTypes.center} mleft='10px' componentHeight='100%'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <FooterImage src={arumgamesLogo.src} alt='Arum games logo' />
      </Row>
    </Row>
    <LicenseTextWrapper jc={JustifyContentTypes.center} componentWidth='70%'>
      <Description textAlign={AlignTextTypes.center} fontSize={FontSizeTypes.xs}>
        Fantasy Town © 2020-2021 gamigo Publishing GmbH, a member of gamigo group. Fantasy Town has been licensed from
        ARUMGAMES Co., Ltd. gamigo is a registered trademark of gamigo AG in Germany and in the European Union. All
        other trademarks are properties of their respective owners. All rights reserved.
      </Description>
    </LicenseTextWrapper>
  </StyledFooter>
);

export { Footer };
