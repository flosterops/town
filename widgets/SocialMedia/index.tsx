import React, { ReactElement } from 'react';
import { Row } from 'ui';
// @ts-ignore
import bg from 'public/assets/images/sm_links_bg.png';
import { IConfig } from 'models/config.model';
import { ESocialIconTypes } from 'models/social.model';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'theme/colors.theme';
import { socialIcons } from './helpers';
import { StyledFontAwesome, StyledSocialMedia } from './styles';
import config from './config.json';

export interface ISocialMediaConfig extends IConfig {
  type: ESocialIconTypes;
  link: string;
}

const SocialMedia = (): ReactElement => (
  <StyledSocialMedia
    image={bg.src}
    jc={JustifyContentTypes.spaceAround}
    componentWidth='auto'
    componentHeight='100%'
    ai={AlignItemsTypes.center}
  >
    {(config as ISocialMediaConfig[]).map(
      (item: ISocialMediaConfig): ReactElement => (
        <Row key={item.id} ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
          <a href={item.link} target='_blank' rel='noreferrer'>
            <StyledFontAwesome icon={socialIcons[item.type]} color={colors.textDisabled} size='lg' />
          </a>
        </Row>
      )
    )}
  </StyledSocialMedia>
);

export { SocialMedia };
