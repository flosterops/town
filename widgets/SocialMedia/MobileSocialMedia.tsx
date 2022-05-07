import React, { ReactElement } from 'react';
import { Row } from 'ui';
import { MobileSocialMediaWrapper, StyledFontAwesome } from './styles';
import config from './config.json';
import { ISocialMediaConfig } from './index';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { socialIcons } from './helpers';
import { colors } from 'theme/colors.theme';

const MobileSocialMedia = (): ReactElement => (
  <MobileSocialMediaWrapper ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} componentHeight='100%'>
    {(config as ISocialMediaConfig[]).map(
      (item: ISocialMediaConfig): ReactElement => (
        <Row
          componentWidth='auto'
          margin='0 10px'
          key={item.id}
          ai={AlignItemsTypes.center}
          jc={JustifyContentTypes.center}
        >
          <a href={item.link} target='_blank' rel='noreferrer'>
            <StyledFontAwesome icon={socialIcons[item.type]} color={colors.textDisabled} size='lg' />
          </a>
        </Row>
      )
    )}
  </MobileSocialMediaWrapper>
);

export { MobileSocialMedia };
