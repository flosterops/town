import { Row } from '../../ui/Layout';
import { FontSizeTypes, JustifyContentTypes } from '../../models/layout.model';
import { FormTitle, SignUpText, SimpleText } from './styles';
// @ts-ignore
import signUpImg from '../../public/assets/images/sign_up_headline.png';
import { colors } from '../../theme/colors.theme';
import { Description } from '../../ui/Description';
import React from 'react';

export function NewsletterHeader () {
  return <>
    <Row componentWidth='auto' jc={JustifyContentTypes.center}>
      <SignUpText src={signUpImg.src} alt='sign up' />
    </Row>
    <Row componentWidth='auto' mtop='10px'>
      <FormTitle doHyeonFont fontSize={FontSizeTypes.xl} uppercase color={colors.black}>
        For our newsletter now
      </FormTitle>
    </Row>
    <Row componentWidth='auto'>
      <SimpleText fontSize={FontSizeTypes.m} mtop='30px' uppercase>
        And be the first to be notified
      </SimpleText>
    </Row>
    <Row componentWidth='auto' jc={JustifyContentTypes.flexEnd}>
      <SimpleText fontSize={FontSizeTypes.m} uppercase mtop='15px'>
        When the
        <Description as='span' margin='-7px 5px 0' fontSize={FontSizeTypes.l} uppercase>
          Pre-registration
        </Description>
        starts!
      </SimpleText>
    </Row>
  </>
}
