import React, { ReactElement, useEffect, useState } from 'react';
import { Row } from 'ui';
// @ts-ignore
import bg from 'public/assets/images/signup_bg.jpeg';
// @ts-ignore
import treeImg from 'public/assets/images/signup_trees_ul.png';
// @ts-ignore
import kittyImg from 'public/assets/images/signup_happy-cat_ol.png';
// @ts-ignore
import portraitImg from 'public/assets/images/signup_photo_ul_cutoff.png';
import { KittyImage, PortraitImage, StyledNewsletter, TreeImage } from './styles';
import { NewsletterForm } from '../NewsletterForm';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import Modal from '../Modal';
import useRequest, { Statuses } from '../../helpers/use-request';
import { getDoubleOptInParams } from '../../helpers/getDoubleOptInParams';
import { DoubleOptIn } from '../DoubleOptIn';

const Newsletter = (): ReactElement => {
  const [isModalOpened, openModal] = useState<boolean>(true);
  const request = useRequest();
  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      request.send(getDoubleOptInParams(token));
    }
  }, []);

  return (
    <StyledNewsletter jc={JustifyContentTypes.center} ai={AlignItemsTypes.center} componentHeight='100%' image={bg.src}>
      <TreeImage src={treeImg.src} alt='tree' />
      <Row componentHeight='100%'>
        <NewsletterForm />
      </Row>
      <KittyImage src={kittyImg.src} alt='happy cat' />
      <PortraitImage src={portraitImg.src} alt='portrait photo' />
      <Modal hideCloseButton={true} opened={request.status !== Statuses.init && isModalOpened} onClose={() => openModal(false)}>
        <DoubleOptIn close={() => openModal(false)} status={request.status} />
      </Modal>
    </StyledNewsletter>
  )
};

export { Newsletter };
